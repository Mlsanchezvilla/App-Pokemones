import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/index.jsx";
import Nav from "./components/Nav/nav.jsx";
import axios from "axios";
//import About from "./components/About/About.jsx";
import Detail from "./components/Detail/index.jsx";
import { Routes, Route, useLocation, useNavigate  } from "react-router-dom"; //error al importar usenavigate
import Form from "./components/Form/form.jsx";
import Favorites from "./components/Favorites/favorites.jsx";

function App() {
  //creando un estado local
  const [pokemons, setPokemons] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = `https://pokeapi.co/api/v2/pokemon/`;
      const response = await axios(
        URL + `?email=${email}&password=${password}`
      );
      if (response.data.access) {
        navigate("/home");
      }
    } catch (error) {
      window.alert("Error logueado");
    }
  }

  //se guardan por referencia
  async function onSearch(id) {
    //llamada a API

    try {
      const response = await axios(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      if (response.data.name) {
        setPokemons((oldPokemons) => [...oldPokemons, response.data]);
      }
    } catch (error) {
      window.alert("Error logueado");
    }
  }

  const onClose = (id) => {
    const filtered = pokemons.filter((pokemon) => pokemon.id !== id);
    setPokemons(filtered);
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : undefined}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/Home"
          element={<Cards pokemons={pokemons} onClose={onClose} />}
        />
        {/* <Route path="/About" element={<About />} /> */}

        <Route path="/detail/:detailId" element={<Detail />} />

        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;





    


