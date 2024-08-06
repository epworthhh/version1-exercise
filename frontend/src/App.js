import { useState, useEffect } from 'react';
import MovieLink from './components/MovieLink/MovieLink';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/api/getMovies')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h1>Movies List</h1>
      <div className="movies">
        {movies.map((movie) => (
          <div key={movie.id} className="movies__item">
            <img src={movie.cover} alt={movie.title} className="movies__image" />
            <div className="movies__content">
              <h3>{movie.title}</h3>
              <div className="movies__block">
                <span className="movies__director">Director</span>
                <MovieLink url={movie.directorLink} text={movie.director} />
              </div>
              <div className="movies__stars">
                <span>⭐ {movie.stars}</span>
              </div>
              <MovieLink url={movie.imdbLink} text={'+ info'} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
