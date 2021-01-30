// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const router = require("express").Router();


module.exports = function(app) {
  app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
    console.log ('Sending index.html');
  });

  app.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
  });

  app.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, '../public', 'stats.html'));
    console.log ('Sending stats.html');
  });
};
