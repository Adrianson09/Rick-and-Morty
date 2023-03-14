import React from 'react'
import styles from './Nav.module.css'
import logo from '../../assets/Rectangle1.svg'
import SearchBar from '../SearchBar/SearchBar'
import { Helmet } from 'react-helmet';
// import { About } from '../About/About';
import {Link} from 'react-router-dom';




export const Nav = ({onSearch}) => {

 
  return (

    <div className={styles.nav}>
      <Helmet>
  <link
    rel="preconnect"
    href="https://fonts.googleapis.com"
  />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;400;700&display=swap"
    rel="stylesheet"
  />
</Helmet>

        <div className={styles.principal}>
            <img src={logo} alt="Logo App" />

            <nav className={styles.navegacion}>
            <Link to={'/'}>
            <p>Home</p>
            </Link>
            <Link to={'/About'}>
            <p>About</p>
            </Link>
           
            </nav>
            
            
            <SearchBar onSearch={onSearch}
            
        />
        </div>
        <div className={styles.texto}>
            <h1>Explora el multiverso con Rick y Morty</h1>
            <p>Viaja a través de dimensiones con tus personajes favoritos y explora nuevas realidades</p>
        </div>
    </div>
  )
}
