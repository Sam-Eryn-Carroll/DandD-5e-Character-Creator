import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewCharacter from '../NewCharacter/NewCharacter';
import CharacterDetail from '../CharacterDetail/CharacterDetail';
import CharactersList from '../CharactersList/CharactersList';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      { user ?
      <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/characters/new" element={<NewCharacter />} />
            <Route path="/characters/detail" element={<CharacterDetail />} />
            <Route path="/characters" element={<CharactersList />} />
          </Routes>
      </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}


