import Starships from './pages/Starships/Starships';
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import StarshipPage from './pages/StarshipPage/StarshipPage';

function App() {
  const [navItems, setNavItems] = useState([{name: "STAR WARS STARSHIPS"}])
  return (
    <>
      <NavBar navItems={navItems} />
      <Routes>
        <Route path='/' element= {<Starships />} />
        <Route path='/starship-page' element= {<StarshipPage />} />
      </Routes>
    </>
  );
}

export default App;
