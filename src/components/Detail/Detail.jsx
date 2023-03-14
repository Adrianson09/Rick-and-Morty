import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import styles from './Detail.module.css'

export const Detail = () => {

    const {detailId} = useParams();

    const [character, setCharacter] = useState({});
    
    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const API_KEY = 'dd9722a0e9e9.a899ed973d85f8c87391';
    axios(`${URL_BASE}/character/${detailId}?key=${API_KEY}`)
    .then((response) => setCharacter(response.data)
    );
    }, [detailId]);
    
  return (
    <div className={styles.contenedor}>
    <div className={styles.card}>
        {
            character.name ? 
            (
                <> 
                <div className={styles.imagen}>
                        <img src={character.image} alt="imagen character" />
                    </div>
                
                 <div className={styles.texto}>
                        <h2>{character.name}</h2>
                        <p>  <span>Status:</span> {character.status}</p>
                        <p> <span>Specie:</span> {character.species}</p>
                        <p> <span>Gender:</span> {character.gender}</p>
                        <p> <span>Origin</span> {character.origin?.name}</p>
                    </div>
                    
                    
                </>
            )
            : (
                <div className={styles.spinner}>
                    <div className={styles.dot1}></div>
                    <div className={styles.dot2}></div>
                </div>
            )
        }

        
        
    </div>

<Link to={'/'} className={styles.btn} >
<p>Home</p>
</Link>

</div>
  )
}
