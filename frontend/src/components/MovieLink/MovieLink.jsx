import React from 'react';
import './MovieLink.css';

const MovieLink = ({ url, text }) => {
  return (
    <a href={url} className="movies__link" target="blank">{text}</a>
  );
};

export default MovieLink;
