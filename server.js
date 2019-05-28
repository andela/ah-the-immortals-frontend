/*jshint esversion: 6 */

const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

// current directory from where the script is running
app.use(express.static('dist'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port);
