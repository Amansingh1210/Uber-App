const  express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const userRoutes = require('.//routes/user.routes')

const cors = require('cors')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectToDb = require('./db/db');

// Connect to MongoDB
connectToDb();

app.get('/', (req, res) => {
    res.send("hello world");
});

app.use('/api/users', userRoutes);


module.exports = app;