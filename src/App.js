import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CharacterList from './components/CharacterList/CharacterList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <CharacterList /> } />
      </Routes>
    </div>
  );
}

export default App;
