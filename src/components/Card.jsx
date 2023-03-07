import styles from './Card.module.css';


export default function Card({name, species, gender, image, onClose}) {
   return (
      <div className={styles.card}>
         <button className={styles.btn} onClick={onClose}>X</button>
         <h2 className={styles.nombre}>{name}</h2>
         <div className={styles.genero}>
            <h2 className={styles.titulos}>{species}</h2>
            <h2 className={styles.titulos}>{gender}</h2>
         </div>
         
         <img className={styles.image}  src={image} alt="Imagen personaje" />
      </div>
   );
}
