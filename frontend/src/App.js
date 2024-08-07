import { useState, useEffect, useContext } from 'react';
import FilterInput from './components/FilterInput/FilterInput';
import { ThemeContext } from './hooks/ThemeContext';
import MovieCard from './components/MovieCard/MovieCard';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const { isLightMode, toggleMode } = useContext(ThemeContext);


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
    <div className={`wrapper${!isLightMode ? ' wrapper--dark' : ''}`}>
      <div className="container">
        <h1>Movies List</h1>
        <button onClick={toggleMode} className={`toggle-theme-button${!isLightMode ? ' toggle-theme-button--dark' : ''}`}>
          {isLightMode ? 'dark mode' : 'light mode'}
        </button>
        <FilterInput
          searchValue={searchValue}
          handleSearchChange={handleSearchChange}
        />
        <div className="movies">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          {hasSearched && filteredMovies.length === 0 && <p>No movies found.</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
