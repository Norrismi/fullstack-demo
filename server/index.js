//install basic express server
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const massive = require("massive");

const port = process.env.SERVER_PORT || 3001;
const connectionString = process.env.CONNECTION_STING;

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

//Basic Middleware
app.use(json());
app.use(cors());
app.use(
  session({
    secret: process.env.SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000
    }
  })
);

app.use("/api/test", (req, res, next) => {
  app
    .get("db")
    .person.find({})
    .then(response => {
      res.json(response);
    });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
