//
// Express js (and node.js) web service that interacts with
// AWS S3 and RDS to provide clients data for building a
// simple photo application for photo storage and viewing.
//
// Based off Project 02 for CS 310, Spring 2023.
//

const express = require("express");
const app = express();
const config = require("./config.js");

const dbConnection = require("./database.js");
const {
  HeadBucketCommand,
  ListObjectsV2Command,
} = require("@aws-sdk/client-s3");

app.use(express.json({ strict: false, limit: "50mb" }));

var startTime;

app.listen(config.service_port, () => {
  startTime = Date.now();
  console.log("web service running...");
  //
  // Configure AWS to use our config file:
  //
  process.env.AWS_SHARED_CREDENTIALS_FILE = config.quizapp_config;
});

app.get("/", (req, res) => {
  var uptime = Math.round((Date.now() - startTime) / 1000);

  res.json({
    status: "running",
    "uptime-in-secs": uptime,
    dbConnection: dbConnection.state,
  });
});

//
// service functions:
//
var questions = require("./api_questions.js");
app.get("/stats", questions.get_questions);
