const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const dbConnection = require("./database.js");

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/test", (req, res) => {
  try {
    var sql = "SELECT * FROM questions ORDER BY RAND()";

    dbConnection.query(sql, (err, rows) => {
      //
      // query has finished:
      //
      console.log(err);
      console.log(rows);

      res.status(200).json({
        message: rows,
      });
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
