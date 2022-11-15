import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddCharacter from './components/AddCharacter/AddCharacter';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';
import CharacterList from './components/CharacterList/CharacterList';

function App() {
  const [characters, setCharacters] = useState([])
  const [form, setForm] = useState({ name: "", occupation: "", weapon: "" })
  const apiURL = "https://ih-crud-api.herokuapp.com/characters"

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <CharacterList apiURL={ apiURL } characters={ characters } setCharacters={ setCharacters } /> } />
        <Route path="/cadastrar" element={ <AddCharacter apiURL={ apiURL } form={form} setForm={setForm} /> } />
        <Route path="/personagem/:id" element={ <CharacterDetails apiURL={ apiURL } form={form} setForm={setForm} /> } />
      </Routes>
    </div>
  );
}

export default App;