import './App.css';
import React from 'react';
import searchBar from './components/SearchBar/SearchBar';
//import Card from './components/Card/Card';
import Nav from './components/SearchBar/nav';
import { useState } from 'react';


export default  function App() {
 
    const [pokemons, setPokemons] = useState(["pikachu", "charmander", "bulbasaur"]);

  const onAddPokemon = () => {
    
    setPokemons([...pokemons, "ditto"])

  }

  return (
   <>

<div className="App">
   <input className="input" type="text" placeholder="Buscar Pokemon" />
   <button className="my-button">HOME PAGE</button>

     
    </div>
   { } 
   <h1>POKEMONES</h1>

   { }

   <button className="my-button" onClick={onAddPokemon}>Agregar</button>
   <ol> 

    {pokemons.map (pokemon => {
        return <li key={pokemon}>{pokemon} </li>

    })}

    
       
    </ol>




   </>
  
  )
}




    


