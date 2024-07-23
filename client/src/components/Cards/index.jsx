import Card from '../Card';
import { useState, useEffect } from "react";
import styles from './Cards.module.css'
import axios from "axios";
import Nav from "../../components/Nav/nav.jsx";


export default function Cards() {
   const [pokemons, setPokemons] = useState([]);
   const [pokemonsOriginals, setPokemonsOriginals] = useState([]);
   
   useEffect(() => {
      listPokemons()
   }, []);

   useEffect(() => {
      console.log("entrerweeewe")
   }, [pokemons]);

   async function onSearch(name) {
      try {
         const response = await axios(`http://localhost:3001/pokemons/names/search?name=${name}`);
         if (response.data.pokemons) {
            setPokemons(response.data.pokemons);
            console.log(pokemons)
         }
      } catch (error) {
         window.alert("Error al buscar el pokemon");
      }
   }

   async function listPokemons() {
      try {
         const response = await axios(`http://localhost:3001/pokemons/`);
         if (response.data.pokemons) {
            setPokemons(response.data.pokemons);
            setPokemonsOriginals(response.data.pokemons);
         }
      } catch (error) {
         window.alert("Error al listar los pokemons");
      }
   }

   const handleOrder = (e) => {
      const sortedPokemons = [...pokemonsOriginals].sort((a, b) => {
         if (e.target.value.toUpperCase() === "A") {
            return a.name > b.name ? 1 : -1;
         } else {
            return a.name < b.name ? 1 : -1;
         }
      });
      setPokemons(sortedPokemons);
   };


   const handleFilter = (e) => {
      const filterPokemons = [...pokemonsOriginals]
         .filter((pokemon) => pokemon.types.includes(e.target.value))
      setPokemons(filterPokemons);
   }

   const handleFilterSouce = (e) => {
      const filterPokemons = [...pokemonsOriginals]
         .filter((pokemon) => pokemon.source === e.target.value)
      setPokemons(filterPokemons);
   }

   return (
      <div className={styles.containerPrincipal}>
         <div>
            <Nav onSearch={onSearch} />
         </div>
         <div>
            <select className="handleOrder" onChange={handleOrder}>
               <option value="a">Ascendente</option>
               <option value="d">Descendente</option>
            </select>
            <select className="handleFilter" onChange={handleFilter}>
               <option value="fire">Fuego</option>
               <option value="water">Agua</option>
               <option value="grass">Planta</option>
               <option value="electric">Eléctrico</option>
               <option value="ice">Hielo</option>
               <option value="fighting">Lucha</option>
               <option value="poison">Veneno</option>
               <option value="ground">Tierra</option>
               <option value="flying">Volador</option>
               <option value="psychic">Psíquico</option>
               <option value="bug">Bicho</option>
               <option value="rock">Roca</option>
               <option value="ghost">Fantasma</option>
               <option value="dragon">Dragón</option>
               <option value="dark">Siniestro</option>
               <option value="steel">Acero</option>
               <option value="fairy">Hada</option>
            </select>
            <select className="handleFilterSource" onChange={handleFilterSouce}>
               <option value="db">DB</option>
               <option value="api">API</option>
            </select>
         </div>
         <div className={styles.container}>
            {pokemons.map((pokemon) => (
               <Card
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  types={pokemon.types}
               />
            ))}
         </div>
      </div>
   )
}
