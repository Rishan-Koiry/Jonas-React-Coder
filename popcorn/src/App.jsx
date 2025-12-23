import { useState, useEffect } from "react";
import "./App.css";
import {
  Film,
  Calendar,
  Star,
  Clock,
  Hash,
  Award,
  X,
  Loader2,
  ExternalLink,
  DollarSign,
  Trophy,
  Globe,
  Languages,
} from "lucide-react";

/* ================= CONFIG ================= */
const API_KEY = "a6ade00c";

/* ================= APP ================= */
export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();

        if (data.Response === "False") {
          setMovies([]);
          setError("");
        } else {
          setMovies(data.Search);
          setError("");
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setMovies([]);
          setError("");
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    handleCloseMovie();

    const timeoutId = setTimeout(() => {
      fetchMovies();
    }, 300);

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [query]);

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleUpdateWatched(movie) {
    setWatched((watched) =>
      watched.map((m) => (m.imdbID === movie.imdbID ? movie : m))
    );
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && movies.length > 0 && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {!isLoading &&
            !error &&
            movies.length === 0 &&
            query.length === 0 && <EmptyState />}
          {!isLoading && !error && movies.length === 0 && query.length >= 3 && (
            <NoResults query={query} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              onUpdateWatched={handleUpdateWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
                onSelectMovie={handleSelectMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

/* ================= NAV ================= */
function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

function Logo() {
  return (
    <div className="logo">
      <Film size={32} />
      <h1>🍿 Movie Rater</h1>
    </div>
  );
}

function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies?.length || 0}</strong> results
    </p>
  );
}

/* ================= MAIN ================= */
function Main({ children }) {
  return <main className="main">{children}</main>;
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

/* ================= LOADER & ERROR ================= */
function Loader() {
  return (
    <div className="loader">
      <Loader2 className="spinning" size={48} />
      <p>Loading movies...</p>
    </div>
  );
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⚠️</span> {message}
    </p>
  );
}

function EmptyState() {
  return (
    <div className="empty-state">
      <Film size={64} className="empty-icon" />
      <h2>Start Your Movie Journey</h2>
      <p>Search for movies above to discover your next favorite film!</p>
    </div>
  );
}

function NoResults({ query }) {
  return (
    <div className="no-results">
      <span className="no-results-icon">🎬</span>
      <h2>No movies found</h2>
      <p>
        We couldn't find any movies matching "<strong>{query}</strong>"
      </p>
      <p className="hint">
        Try searching with different keywords or check your spelling
      </p>
    </div>
  );
}

/* ================= MOVIES ================= */
function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

function Movie({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <Calendar size={16} />
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

/* ================= MOVIE DETAILS ================= */
function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  onUpdateWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedMovie = watched.find((movie) => movie.imdbID === selectedId);
  const watchedUserRating = watchedMovie?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
    Writer: writer,
    Language: language,
    Country: country,
    Awards: awards,
    BoxOffice: boxOffice,
    Ratings: ratings,
    imdbID,
  } = movie;

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;

    return () => {
      document.title = "Movie Rater";
    };
  }, [title]);

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  function handleUpdate() {
    const updatedMovie = {
      ...watchedMovie,
      userRating,
    };

    onUpdateWatched(updatedMovie);
    setIsEditing(false);
  }

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              <X size={24} />
            </button>
            <img src={poster} alt={`Poster of ${title}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <Star fill="#f59e0b" color="#f59e0b" size={16} />
                <span>{imdbRating} IMDb rating</span>
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : isEditing ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                    defaultRating={watchedUserRating}
                  />
                  <div className="rating-buttons">
                    <button className="btn-add" onClick={handleUpdate}>
                      Update Rating
                    </button>
                    <button
                      className="btn-cancel"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <div className="watched-rating">
                  <p>
                    You rated this movie {watchedUserRating}{" "}
                    <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  </p>
                  <button
                    className="btn-change"
                    onClick={() => setIsEditing(true)}
                  >
                    Change Rating
                  </button>
                </div>
              )}
            </div>

            <div className="movie-links">
              <a
                href={`https://www.imdb.com/title/${imdbID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link btn-imdb"
              >
                <ExternalLink size={16} />
                View on IMDb
              </a>
              <a
                href={`https://www.justwatch.com/us/search?q=${encodeURIComponent(
                  title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link btn-watch"
              >
                <ExternalLink size={16} />
                Where to Watch
              </a>
            </div>

            <div className="movie-plot">
              <h3>Plot</h3>
              <p>
                <em>{plot}</em>
              </p>
            </div>

            <div className="movie-info-grid">
              <div className="info-item">
                <span className="info-label">Starring</span>
                <span className="info-value">{actors}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Director</span>
                <span className="info-value">{director}</span>
              </div>
              {writer && writer !== "N/A" && (
                <div className="info-item">
                  <span className="info-label">Writer</span>
                  <span className="info-value">{writer}</span>
                </div>
              )}
              {language && language !== "N/A" && (
                <div className="info-item">
                  <span className="info-label">
                    <Languages size={14} /> Language
                  </span>
                  <span className="info-value">{language}</span>
                </div>
              )}
              {country && country !== "N/A" && (
                <div className="info-item">
                  <span className="info-label">
                    <Globe size={14} /> Country
                  </span>
                  <span className="info-value">{country}</span>
                </div>
              )}
              {awards && awards !== "N/A" && (
                <div className="info-item awards">
                  <span className="info-label">
                    <Trophy size={14} /> Awards
                  </span>
                  <span className="info-value">{awards}</span>
                </div>
              )}
              {boxOffice && boxOffice !== "N/A" && (
                <div className="info-item">
                  <span className="info-label">
                    <DollarSign size={14} /> Box Office
                  </span>
                  <span className="info-value">{boxOffice}</span>
                </div>
              )}
            </div>

            {ratings && ratings.length > 0 && (
              <div className="ratings-section">
                <h3>Ratings</h3>
                <div className="ratings-grid">
                  {ratings.map((rating, index) => (
                    <div key={index} className="rating-badge">
                      <span className="rating-source">{rating.Source}</span>
                      <span className="rating-score">{rating.Value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

/* ================= WATCHED ================= */
function WatchedSummary({ watched }) {
  const avgImdbRating =
    watched.length > 0
      ? (
          watched.reduce((sum, movie) => sum + movie.imdbRating, 0) /
          watched.length
        ).toFixed(1)
      : 0;

  const avgUserRating =
    watched.length > 0
      ? (
          watched.reduce((sum, movie) => sum + movie.userRating, 0) /
          watched.length
        ).toFixed(1)
      : 0;

  const avgRuntime =
    watched.length > 0
      ? Math.round(
          watched.reduce((sum, movie) => sum + movie.runtime, 0) /
            watched.length
        )
      : 0;

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

function WatchedList({ watched, onDeleteWatched, onSelectMovie }) {
  return (
    <ul className="list list-watched">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
}

function WatchedMovie({ movie, onDeleteWatched, onSelectMovie }) {
  return (
    <li
      onClick={() => onSelectMovie(movie.imdbID)}
      style={{ cursor: "pointer" }}
    >
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <Star size={16} fill="#f59e0b" color="#f59e0b" />
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <Award size={16} fill="#8b5cf6" color="#8b5cf6" />
          <span>{movie.userRating}</span>
        </p>
        <p>
          <Clock size={16} />
          <span>{movie.runtime} min</span>
        </p>
      </div>

      <button
        className="btn-delete"
        onClick={(e) => {
          e.stopPropagation();
          onDeleteWatched(movie.imdbID);
        }}
      >
        <X size={20} />
      </button>
    </li>
  );
}

/* ================= STAR RATING ================= */
function StarRating({
  maxRating = 5,
  size = 24,
  onSetRating,
  defaultRating = 0,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  useEffect(() => {
    setRating(defaultRating);
    if (defaultRating > 0) {
      onSetRating(defaultRating);
    }
  }, [defaultRating]);

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  return (
    <div className="star-rating">
      <div className="stars">
        {Array.from({ length: maxRating }, (_, i) => (
          <StarIcon
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            size={size}
          />
        ))}
      </div>
      <p className="rating-text">{tempRating || rating || ""}</p>
    </div>
  );
}

function StarIcon({ onRate, full, onHoverIn, onHoverOut, size }) {
  return (
    <span
      role="button"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      className="star-icon"
    >
      {full ? (
        <Star fill="#f59e0b" color="#f59e0b" size={size} />
      ) : (
        <Star color="#6b7280" size={size} />
      )}
    </span>
  );
}
