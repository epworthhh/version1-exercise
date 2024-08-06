import React from 'react';
import './FilterInput.css';

const FilterInput = ({ searchValue, handleSearchChange }) => {
  return (
    <input 
      type="text" 
      placeholder="Search by title or director" 
      value={searchValue} 
      onChange={handleSearchChange} 
      className="search-input"
    />
  );
};

export default FilterInput;
