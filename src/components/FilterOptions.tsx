// src/components/FilterOptions.js

import React, { useState } from 'react';

const FilterOptions = ({ onFilter }) => {
  const [genreFilter, setGenreFilter] = useState('');
  const [publicationYearFilter, setPublicationYearFilter] = useState('');

  const handleGenreChange = (event) => {
    setGenreFilter(event.target.value);
  };

  const handlePublicationYearChange = (event) => {
    setPublicationYearFilter(event.target.value);
  };

  const handleFilter = () => {
    // Call the onFilter prop with the filter options
    onFilter({ genre: genreFilter, publicationYear: publicationYearFilter });
  };

  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <label htmlFor="genre" className="mr-2">Genre:</label>
        <input
          type="text"
          id="genre"
          value={genreFilter}
          onChange={handleGenreChange}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="publicationYear" className="mr-2">Publication Year:</label>
        <input
          type="text"
          id="publicationYear"
          value={publicationYearFilter}
          onChange={handlePublicationYearChange}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        onClick={handleFilter}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterOptions;
