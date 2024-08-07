import Card from '../Card';
import { useState, useEffect } from "react";
import styles from './Cards.module.css';
import axios from "axios";
import { useSelector, connect, useDispatch } from "react-redux";
import Nav from "../../components/Nav/nav.jsx";
import { useNavigate } from 'react-router-dom';
import { filterCards, orderCards, fillPokemons, fillOriginalPokemos, filterBySource } from "../../redux/actions";

const Cards = (props) => {
   const [currentPage, setCurrentPage] = useState(1); // Página actual
   const [cardsPerPage] = useState(12); // Tarjetas por página
   const navigate = useNavigate();
   const pokemons = useSelector(state => state.allPokemons);

   const dispatch = useDispatch();
   
   useEffect(() => {
      listPokemons();
   }, []);


   async function onSearch(name) {
      try {
         const response = await axios(`http://localhost:3001/pokemons/names/search?name=${name}`);
         if (response.data.pokemons) {
            dispatch(fillPokemons(response.data.pokemons));
         }
      } catch (error) {
         window.alert("Error al buscar el pokemon");
      }
   }

   async function listPokemons() {
      try {
         const response = await axios(`http://localhost:3001/pokemons/`);
         if (response.data.pokemons) {
            dispatch(fillPokemons(response.data.pokemons));
            dispatch(fillOriginalPokemos(response.data.pokemons));
         }
      } catch (error) {
         window.alert("Error al listar los pokemons");
      }
   }

   const handleOrder = (e) => {
      dispatch(orderCards(e.target.value));
  }


  const handleFilter = (e) => {
      dispatch(filterCards(e.target.value));
  }

   const handleFilterSouce = (e) => {
      dispatch(filterBySource(e.target.value));
   }

   const createForm = () => {
      navigate('/form');
   }

   // Paginación
   const indexOfLastCard = currentPage * cardsPerPage;
   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
   const currentCards = pokemons.slice(indexOfFirstCard, indexOfLastCard);

   // Cambiar de página
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   // Número total de páginas
   const pageNumbers = [];
   for (let i = 1; i <= Math.ceil(pokemons.length / cardsPerPage); i++) {
      pageNumbers.push(i);
   }

   
   return (
      <div className={styles.containerPrincipal}>
         <div>
            <Nav onSearch={onSearch} />
         </div>
         
         <h1 className={styles.tittle}>Filtros y Ordenamiento</h1>
         
         <div>
            <select className="handleOrder" onChange={handleOrder}>
               <option value="a">Ascendente</option>
               <option value="d">Descendente</option>
            </select>
            <select className="handleFilter" onChange={handleFilter}>
               <option value="all">Todos</option>
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
            {currentCards.map((pokemon) => (
               <Card
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  types={pokemon.types}
                  />
            ))}
         </div>

         {/* Controles de paginación */}
         <div className={styles.pagination}>
            <button  className={styles.button} onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
            {pageNumbers.map(number => (
               <button className={styles.button} key={number} onClick={() => paginate(number)}>{number}</button>
            ))}
            <button className={styles.button} onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length}>Siguiente</button>
            <div> <button className={styles.botoncito} onClick={createForm}>Ir a Crear Nuevo Pokémon</button> </div>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      allPokemons: state.allPokemons,
   };
};

export default connect(mapStateToProps, { filterCards, orderCards, fillPokemons, fillOriginalPokemos, filterBySource })(Cards);