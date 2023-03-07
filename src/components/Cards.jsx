import Card from './Card';
import style from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   
   return (
   <div className={style.cards}>
      {
         characters.map(({name, species, gender, image})=>{
            return <Card 
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
            />
         })
      }
   </div>
   
   );
}
