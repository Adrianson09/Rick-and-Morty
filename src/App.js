import './App.css'
import { useState } from 'react'
import Cards from './components/Cards.jsx'
import { Nav } from './components/Nav'
import personajes from './assets/Frame 13.svg'
import { Footer } from './components/Footer'


function App () {
  const [characters, setCharacters] = useState([]);
  
  const onSearch =  (character) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY = 'dd9722a0e9e9.a899ed973d85f8c87391';
    fetch(`${URL_BASE}/character/${character}?key=${API_KEY}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          }else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }

  const onClose = (id) =>{
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  };
  return (
    <div className='App' style={{ padding: '0px' }}>
      <Nav onSearch={onSearch}/>
      <div>
      <img src={personajes} alt='imagen texto personajes' style={{ padding: '20px' }} />
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App



