import Card from '../Card/Card';
import style from './Cards.module.css'
import personajes from '../../assets/Frame 13.svg'


export default function Cards({ characters, onClose }) {
   console.log(characters)
   
   return (
      <>
      <div>
      <img src={personajes} alt='imagen texto personajes' style={{ padding: '20px' }} />
        
      </div>
      <div className={style.cards}>
      
      {
         
         characters.map(({id,name, species, gender, image})=>{
            return <Card 
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => onClose(id)}
            />
         })
      }
   </div>
      </>
   
   
   );
}
