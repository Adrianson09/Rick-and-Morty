import './App.css'
import {Routes,Route} from 'react-router-dom';
import { useState } from 'react'
import Cards from './components/Cards/Cards.jsx'
import { Nav } from './components/Nav/Nav'
import { Footer } from './components/Footer/Footer'
import { About } from './components/About/About';
import { Detail } from './components/Detail/Detail';
import NotFound from './components/NotFound';


function App () {
  const [characters, setCharacters] = useState([]);
  
  const onSearch =  (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY = 'dd9722a0e9e9.a899ed973d85f8c87391';

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido")
    }
    fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name ) {
             setCharacters((oldChars) => [...oldChars, data]);
          }else {
             window.alert('No hay personajes con ese ID o ya se encuentra en la pantalla');
          }
       });
    };

  const onClose = (id) =>{
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  };


  return (
    <div className='App' style={{ padding: '0px' }}>

      <Nav onSearch={onSearch}/>
      <Routes>
        
        <Route  path="/" element={<Cards characters={characters} onClose={onClose}/>}/>
        
        <Route  path="/about" element={<About/>}/>

        <Route  path="/detail/:detailId" element={<Detail/>}/>

        <Route path='*' element={<NotFound/>}/>

      </Routes>
      
      <footer>
        <Footer/>
      </footer>
      
    </div>
  )
}

export default App



