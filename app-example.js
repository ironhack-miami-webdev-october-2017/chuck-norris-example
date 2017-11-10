const express = require("express");
const Chuck = require("chucknorris-io");

// other requires ...


const app = express();
const client = new Chuck();


// SETUP ...


app.get("/random", (req, res, next) => {
    client.getRandomJoke()
      .then((response) => {
          // "response" contains the joke data
          console.log("Joke Data:");
          console.log(response);

          // save "response.value" as a local EJS variable
          // render a view to display the joke
      })
      .catch((err) => {
          console.log("Joke ERROR:");
          console.log(err);

          // render an error view (think 404 page)
      });
}); // GET /random
