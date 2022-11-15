import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddCharacter from './components/AddCharacter/AddCharacter';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';
import CharacterList from './components/CharacterList/CharacterList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <CharacterList /> } />
        <Route path="/cadastrar" element={ <AddCharacter /> } />
        <Route path="/personagem/:id" element={ <CharacterDetails /> } />
      </Routes>
    </div>
  );
}

export default App;
