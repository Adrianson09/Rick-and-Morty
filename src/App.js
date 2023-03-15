import './App.css'
import {Routes,Route, useNavigate} from 'react-router-dom';
import { useState, useEffect}  from 'react'
import Cards from './components/Cards/Cards.jsx'
import { Nav } from './components/Nav/Nav'
import { Form } from './components/Form/Form.jsx'
import { Footer } from './components/Footer/Footer'
import { About } from './components/About/About';
import { Detail } from './components/Detail/Detail';
import NotFound from './components/NotFound';
import { useLocation } from 'react-router-dom';


function App () {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const [access , setAcces] = useState(false);

  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate]);

  const username = 'adrian@email.com';
  const password = 'Henry2023';

  const login = (userData)=>{
    if(userData.password === password && userData.username === username) {
      setAcces(true);
      navigate('/home')
    }else{
      alert('Credenciales incorrectas')
    }
  }
  
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

     
      {pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        
        <Route  path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        
        <Route  path="/about" element={<About/>}/>

        <Route  path="/" element={<Form login={login}/>}/>

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



