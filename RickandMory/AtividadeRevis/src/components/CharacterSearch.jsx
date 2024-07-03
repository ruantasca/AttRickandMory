import React, { useState } from 'react';

const CharacterSearch = ({ setCharacters }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`);
      const data = await response.json();
      setCharacters(data.results || []);
    } catch (error) {
      console.error('Erro ao buscar personagens:', error);
      setCharacters([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Digite o nome do personagem"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default CharacterSearch;
