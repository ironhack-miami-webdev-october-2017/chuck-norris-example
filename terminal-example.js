const Chuck = require("chucknorris-io");


const client = new Chuck();


client.getRandomJoke()
  .then((response) => {
      // "response" contains the joke data
      console.log("Joke Data:", response);

      // use joke data here
      console.log("Random Joke:");
      console.log(response.value);
  })
  .catch((err) => {
      // this will get called ONLY if there's an error
      console.log("Joke ERROR:", err);
  });
