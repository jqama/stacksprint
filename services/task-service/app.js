//Import Express Library
const express = require("express");

//create our application
const app = express();

//Tell our application to understand JSON data (when user sends data to server)
app.use(express.json());

//Create an API
// WHEN someone visits "http://localhost/api/tasks", run this function
app.get("/api/tasks", (req, res) => {
  //Send back successful status 200 and some fake JSON data
  res.status(200).json({
    message: "Task service is running.",
    tasks: [
      { id: 1, title: "Learn Node.js" },
      { id: 2, title: "Write the first test" },
    ],
  });
});


//Now we export our app so that our test files can import it and use it
//Notice we are not starting the server here we are just defining it 
module.exports = app;