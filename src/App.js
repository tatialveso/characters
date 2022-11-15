import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddCharacter from './components/AddCharacter/AddCharacter';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';
import CharacterList from './components/CharacterList/CharacterList';
import { useState } from 'react';

function App() {
  const [form, setForm] = useState({ name: "", occupation: "", weapon: "" })
  const apiURL = "https://ih-crud-api.herokuapp.com/characters"

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <CharacterList apiURL={ apiURL } /> } />
        <Route path="/cadastrar" element={ <AddCharacter apiURL={ apiURL } form={ form } setForm={ setForm } /> } />
        <Route path="/personagem/:id" element={ <CharacterDetails apiURL={ apiURL } form={ form } setForm={ setForm } /> } />
      </Routes>
    </div>
  );
}

export default App;
