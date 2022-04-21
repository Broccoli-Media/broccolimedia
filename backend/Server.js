const express = require('express');
// const request = require('request')
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000

app.use(cors());
app.use(express.json());

// Connecting mongoose
// mongoose.connect("")

// Routers

app.listen(port, () => console.log(`Example app listening on port ${port}!`));