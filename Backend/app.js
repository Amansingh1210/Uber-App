const  express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();
const connectToDb = require('./db/db');
const userRoutes = require('.//routes/user.routes');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Connect to MongoDB
connectToDb();

app.get('/', (req, res) => {
    res.send("hello world");
});

app.use('/api/users', userRoutes);


module.exports = app;