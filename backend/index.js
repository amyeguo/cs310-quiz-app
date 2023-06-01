const express = require('express');
const app = express();
const port = 3000;

const dbConnection = require('./database.js')


// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get("/test", (req, res) => {
    try {
        var sql = "SELECT * FROM questions;";

        dbConnection.query(sql, (err, rows) => {
        //
        // query has finished:
        //
        console.log(err);
        console.log(rows);
        
        res.status(200).json({
            "message": rows
        });
    });
    }  catch (err) {
        res.status(400).json({
          "message": err.message
        });
    }
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});