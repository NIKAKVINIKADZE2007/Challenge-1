// App.js
import React, { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 2000);
  const [cherechterList, setCherechterList] = useState(null);

  async function handleSearch() {
    try {
      const responsive = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${debouncedSearchTerm}`
      );

      if (!responsive.ok) {
        throw new Error('Error');
      }
      const data = await responsive.json();
      setCherechterList(data);
    } catch (error) {
      console.log('no cherechter found');
    }
  }
  useEffect(() => {
    if (debouncedSearchTerm) {
      handleSearch();
      // Api
      // Example usage:
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {cherechterList && (
        <ul>
          {cherechterList.results.map((cherechter) => (
            <li key={cherechter.id}>
              <h1>{cherechter.name}</h1>
              <p>species: {cherechter.species}</p>
              <img src={cherechter.image} alt='photo' />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// https://rickandmortyapi.com/api/character/?name=${debouncedSearchTerm}
