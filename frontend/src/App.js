import { useState, useEffect } from 'react';
import MovieLink from './components/MovieLink/MovieLink';
import FilterInput from './components/FilterInput/FilterInput';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    fetch('/api/getMovies')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);

    if (!hasSearched) {
      setHasSearched(true);
    }
  };

  const filteredMovies = searchValue.length > 2 
    ? movies.filter(movie => 
        movie.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        movie.director.toLowerCase().includes(searchValue.toLowerCase())
    ) : movies;

  return (
    <div className="container">
      <h1>Movies List</h1>
      <FilterInput
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
      />
      <div className="movies">
        {filteredMovies.map((movie) => (
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
        {hasSearched && filteredMovies.length === 0 && <p>No movies found.</p>}
      </div>
    </div>
  );
}

export default App;
