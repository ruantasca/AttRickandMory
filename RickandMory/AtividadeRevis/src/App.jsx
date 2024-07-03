import React, { useState } from 'react';
import CharacterSearch from './components/CharacterSearch';
import CharacterList from './components/CharacterList';

const App = () => {
  const [characters, setCharacters] = useState([]);

  return (
    <div>
      <h1>Busca de Personagens</h1>
      <CharacterSearch setCharacters={setCharacters} />
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
