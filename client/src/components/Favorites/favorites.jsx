import { useSelector, useDispatch } from "react-redux";
import Card from "../Card";
import { useState, useEffect } from "react";
import { filterCards, orderCards } from "../redux/actions";

const Favorites = () => {
  const [aux, setAux] = useState(false);
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderCards("a"));
  }, [dispatch]);

  const handleOrder = (e) => {
    setAux(!aux);
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <div>
        <select onChange={handleOrder}>
          <option value="name-asc">Nombre Ascendente</option>
          <option value="name-desc">Nombre Descendente</option>
          <option value="attack-asc">Ataque Ascendente</option>
          <option value="attack-desc">Ataque Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="steel">Acero</option>
          <option value="fire">Fuego</option>
          <option value="water">Agua</option>
          <option value="grass">Planta</option>
          <option value="electric">Eléctrico</option>
          <option value="bug">Bicho</option>
          <option value="poison">Veneno</option>
          <option value="ground">Tierra</option>
          <option value="flying">Volador</option>
          <option value="fighting">Lucha</option>
          <option value="psychic">Psíquico</option>
          <option value="rock">Roca</option>
        </select>
      </div>
      <div style={{
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(auto, 1fr)"
      }}>
        {favorites.map((fav) => (
          <Card
            className="card"
            name={fav.name}
            id={fav.id}
            key={fav.id}
            life={fav.life}
            attack={fav.attack}
            defense={fav.defense}
            speed={fav.speed}
            height={fav.height}
            weight={fav.weight}
            type={fav.type}
            image={fav.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;



