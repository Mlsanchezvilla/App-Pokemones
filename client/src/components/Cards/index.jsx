import Card from '../Card';
import styles from './Cards.module.css'



export default function Cards({pokemons, onClose}) {
   console.log("Cards")
   return (
      <div className={styles.container}>
         {pokemons.map((pokemon)=>(
           <Card 
               key = {pokemon.id}
               id = {pokemon.id} 
               name = {pokemon.name}
               status = {pokemon.status}
               species = {pokemon.species}
               gender = {pokemon.gender}
               origin = {pokemon.origin.name}
               image = {pokemon.image}
               onClose = {onClose}
            />
         ))} 
      </div>
   )  
}
