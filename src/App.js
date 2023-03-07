import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import { Header } from './components/Header'
import SearchBar from './components/SearchBar.jsx'
import characters, {Rick} from './data.js'
import personajes from './assets/Frame 13.svg'

function App () {
  return (
    <div className='App' style={{ padding: '0px' }}>
      <Header/>
      <div>
        <img src={personajes} alt='imagen texto personajes' style={{ padding: '20px' }} />
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  )
}

export default App
