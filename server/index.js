const express = require("express");
const app = express();
const port = 4000;
const knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.get("/movies/", function (req, res) {
  knex("movies")
    .select("*")
    .then((data) => {
      res.json(data);
    })
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again",
      })
    );
});

app.get('/movies/:id', (req, res) => {
    const movieId = parseInt(req.params.id);
  
    knex('movies')
      .where({ id: movieId })
      .first()
      .then((movie) => {
        if (movie) {
          res.json(movie);
        } else {
          res.status(400).json({ message: 'Movie not found' });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: 'Server error' });
      });
  });
  

app.post("/movies/", (req, res) => {
  const { title, summary, url } = req.body;
  const newMovie = {
    title,
    summary,
    url,
  };
  knex("movies")
    .insert({
      title: req.body.title,
      summary: req.body.summary,
      url: req.body.url,
    })
    .then(() => {
      res.json("Movie has been added!");
    })
    .catch(() => {
      res.json("No movie was added.");
    });
});

app.patch('/dogs_cats/:id', (req,res) => {

    const { title, summary, url } = req.body;
  const newMovie = {
    title,
    summary,
    url,
    };
  
     knex('movies')
    .where({ id: parseInt(req.params.id) })
    .update(newMovie)
    .then(() => {res.json('Movie updated');})
    .catch(() => {res.json('No movie was updated.')});
})

app.delete('/movies/:id', (req,res) => {
    knex('movies')
    .where({ id: parseInt(req.params.id) })
    .del()
    .then(() => {res.json('Movie Deleted ):'); })
    .catch(() => { res.json('Movie was not deleted')});
  });

app.listen(port, () => {
  console.log(`Your server is running on port ${port}`);
});
