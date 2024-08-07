import React from 'react';
import MovieLink from '../MovieLink/MovieLink';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movies__item">
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
  );
};

export default MovieCard;