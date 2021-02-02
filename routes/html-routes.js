// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const app = require("express").Router();

// Get route to return index.html from /
app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
  console.log ('Sending index.html');
});

// Get route to return exercise.html via /exercise
app.get("/exercise", (req,res) => {
  res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
});

// Get route to return Stats.html via /stats
app.get("/stats", (req,res) => {
  res.sendFile(path.join(__dirname, '../public', 'stats.html'));
  console.log ('Sending stats.html');
});

module.exports = app;