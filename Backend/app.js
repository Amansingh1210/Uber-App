const  express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config();

const cors = require('cors')
app.use(cors());
const connectToDb = require('./db/db');

// Connect to MongoDB
connectToDb();

app.get('/', (req, res) => {
    res.send("hello world");
});


module.exports = app;