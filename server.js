const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Connect to Mongo database via Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Define API and HTML (static content) routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html-routes.js"));

// Bring web server online on defined port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

