import { useState } from "react";
import "./App.css";
import { Film, Calendar, Star, Clock, Hash, Award } from "lucide-react";
/* ================= DATA ================= */

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0111161",
    Title: "The Shawshank Redemption",
    Year: "1994",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDI0LTg5YzUtODM1ZmRhZGM3ODg2XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0068646",
    Title: "The Godfather",
    Year: "1972",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmYtYTAwZS00ZDI1LWFmNTEtODM1ZmRhZGM3ODg2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0468569",
    Title: "The Dark Knight",
    Year: "2008",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0109830",
    Title: "Forrest Gump",
    Year: "1994",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTAtY2U1ZS00ZDY4LWJhYzgtYzE3NmM3ZDJjNjE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
];

/* ================= APP ================= */

export default function App() {
  const [movies] = useState(tempMovieData);
  const [watched] = useState(tempWatchedData);
  const [filteredMovies, setFilteredMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar movies={movies} setFilteredMovies={setFilteredMovies} />
      <Main movies={filteredMovies} watched={watched} />
    </>
  );
}

/* ================= NAV ================= */

function NavBar({ movies, setFilteredMovies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search movies={movies} setFilteredMovies={setFilteredMovies} />
      <NumResults movies={movies} />
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <Film size={32} />
      <h1>RK-Rater</h1>
    </div>
  );
}

function Search({ movies, setFilteredMovies }) {
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(query)
    );
    setFilteredMovies(filtered);
  };

  return (
    <input
      className="search"
      placeholder="Search movies..."
      onChange={handleSearch}
    />
  );
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

/* ================= MAIN ================= */

function Main({ movies, watched }) {
  return (
    <main className="main">
      <Box>
        <MovieList movies={movies} />
      </Box>

      <Box>
        <WatchedSummary watched={watched} />
        <WatchedList watched={watched} />
      </Box>
    </main>
  );
}

/* ================= REUSABLE BOX ================= */
function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((o) => !o)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

/* ================= MOVIES ================= */
function MovieList({ movies }) {
  return (
    <ul className="list list-movies">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function Movie({ movie }) {
  return (
    <li>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>
        <Calendar size={16} /> {movie.Year}
      </p>
    </li>
  );
}

/* ================= WATCHED ================= */
function WatchedSummary({ watched }) {
  const average = (arr) => arr.reduce((acc, cur) => acc + cur / arr.length, 0);

  const avgImdbRating = average(
    watched.map((movie) => movie.imdbRating)
  ).toFixed(1);

  const avgUserRating = average(
    watched.map((movie) => movie.userRating)
  ).toFixed(1);

  const avgRuntime = Math.round(average(watched.map((movie) => movie.runtime)));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <Hash size={16} />
          <span>{watched.length} movies</span>
        </p>
        <p>
          <Star size={16} fill="#f59e0b" color="#f59e0b" />
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <Award size={16} fill="#8b5cf6" color="#8b5cf6" />
          <span>{avgUserRating}</span>
        </p>
        <p>
          <Clock size={16} />
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedList({ watched }) {
  return (
    <ul className="list list-watched">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function WatchedMovie({ movie }) {
  return (
    <li>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <Star size={16} /> {movie.imdbRating}
        </p>
        <p>
          <Award size={16} /> {movie.userRating}
        </p>
        <p>
          <Clock size={16} /> {movie.runtime} min
        </p>
      </div>
    </li>
  );
}
