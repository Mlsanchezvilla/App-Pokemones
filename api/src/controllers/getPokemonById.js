const axios = require("axios");
const { Pokemons, Types  } = require("../db.js");
const apiUrl = `https://pokeapi.co/api/v2/pokemon/`;

const getPokemonById = async (req, res) => {
    const ID = req.params.id;
    try {
      let pokemon = {};
      if (isNaN(ID)) {
        pokemon_db = await Pokemons.findByPk(ID, {
          include: {
            model: Types,
          }
        });
        console.log(pokemon_db)
        pokemon = {
          id: pokemon_db.id,
          name: pokemon_db.name,
          types: pokemon_db.Types.map((type) => type.name),
        };
      } else {
        const response = await axios.get(`${apiUrl}${ID}`);
        console.log(response.data);
        pokemon = {
          id: ID,
          name: response.data.name,
          types: response.data.types.map((type) => type.type.name),
        };
      }
      if (pokemon) {
        res.status(200).json({"pokemon": pokemon})
      }
      else {
        res.status(404).json({ message: "No se encontro el perro" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error al obtener el elemento" });
    }
  };

module.exports = getPokemonById;