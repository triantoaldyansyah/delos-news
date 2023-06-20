import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return React.createElement('form', { onSubmit: handleSubmit },
    React.createElement('input', {
      type: 'text',
      placeholder: 'What do you looking for ...',
      value: searchTerm,
      onChange: handleChange
    }),
    React.createElement('button', { type: 'submit' }, 'Search')
  );
};

export default SearchBar;
