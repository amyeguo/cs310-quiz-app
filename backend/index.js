
const express = require('express');
// const cors = require('cors');
const app = express();
const config = require('./config.js');
const dbConnection = require('./database.js')
const path = require("path");


app.use(express.static(path.join(__dirname, 'build')));


// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
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

app.listen(config.service_port, () => {
  console.log(`Server is running on http://localhost:${config.service_port}`);
});