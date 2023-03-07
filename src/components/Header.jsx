import React from 'react'
import styles from './Header.module.css'
import logo from '../assets/Rectangle1.svg'
import SearchBar from './SearchBar'
import { Helmet } from 'react-helmet';


export const Header = () => {
  return (

    <div className={styles.header}>
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
            <SearchBar/>
        </div>
        <div className={styles.texto}>
            <h1>Explora el multiverso con Rick y Morty</h1>
            <p>Viaja a través de dimensiones con tus personajes favoritos y explora nuevas realidades</p>
        </div>
    </div>
  )
}
