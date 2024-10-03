// App.js
import React, { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 2000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Search for:', debouncedSearchTerm);
      // Api
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

// https://rickandmortyapi.com/api/character/?name=${debouncedSearchTerm}
