import { useState } from 'react';
import styles from './Search.module.css';


export default function SearchBar({onSearch}) {
   
      
      const [character, setCharacter] = useState("");
    
      const handleChange = (event) => {
         setCharacter(event.target.value);
      };
   return (
      <div className={styles.contenedor}>
         <input className={styles.input} type='search' value={character} onChange={handleChange} />
      <button className={styles.btn} onClick={()=>onSearch(character)}>Agregar</button>
      </div>
   );
}
