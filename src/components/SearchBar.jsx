import styles from './Search.module.css';


export default function SearchBar(props) {
   return (
      <div className={styles.contenedor}>
         <input className={styles.input} type='search' />
      <button className={styles.btn} onClick={()=>{props.onSearch(2)}}>Agregar</button>
      </div>
   );
}
