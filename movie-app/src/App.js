import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newMovieSummary, setNewMovieSummary] = useState("");
  const [newMovieImageUrl, setNewMovieImageUrl] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/movies`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
      });
  }, []);

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim().toLowerCase();

    if (trimmedQuery === "") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(trimmedQuery)
      );
      setFilteredMovies(filtered);
    }
  };

  const handleAddMovie = () => {
    const newMovie = {
      id: movies.length + 1,
      title: newMovieTitle,
      summary: newMovieSummary,
      url: newMovieImageUrl,
    };

    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);

    setNewMovieTitle("");
    setNewMovieSummary("");
    setNewMovieImageUrl("");
  };

  const handleDeleteMovie = (movieId) => {
    const updatedMovies = movies.filter((movie) => movie.id !== movieId);
    const updatedFilteredMovies = filteredMovies.filter(
      (movie) => movie.id !== movieId
    );

    setMovies(updatedMovies);
    setFilteredMovies(updatedFilteredMovies);
  };

  return (
    <div className="movie-container">
      <h1>Christmas Movies</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <br/>
      <div className="add-movie">
        <input
          type="text"
          placeholder="Title"
          value={newMovieTitle}
          onChange={(e) => setNewMovieTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Summary"
          value={newMovieSummary}
          onChange={(e) => setNewMovieSummary(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newMovieImageUrl}
          onChange={(e) => setNewMovieImageUrl(e.target.value)}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
      <ul className="movie-list">
        {filteredMovies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <strong>{movie.title}</strong>: {movie.summary}
            <img src={movie.url} alt={movie.title} className="movie-image" height />
            <button onClick={() => handleDeleteMovie(movie.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
