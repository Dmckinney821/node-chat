const path = require('path');
var express = require('express');
const publicPath = path.join(__dirname, '../public');
var app = express();
const port = process.env.Port || 3001;

app.use(express.static(publicPath));


app.listen(3001, () => {
    console.log(`Server is up on ${PORT}`)
});
// console.log(__dirname + '/../public');
// console.log(publicPath);