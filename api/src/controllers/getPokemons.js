const axios = require("axios");
const apiUrl = "https://pokeapi.co/api/v2/pokemon";
const { Pokemons, Types } = require("../db.js");

const getPokemons = async (req, res) => {
  try {
    let pokemons = [];
    pokemons_db = await Pokemons.findAll({
      include: {
        model: Types,
      },
    });
    for (const pokemon of pokemons_db) {
      pokemons.push({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.image,
        types: pokemon.Types.map((type) => type.name),
        source: "db",
      });
    }
    const response = await axios(`${apiUrl}`);
    for (const pokemon of response.data.results) {
      console.log(pokemon.url);
      const response = await axios(`${pokemon.url}`);
      pokemons.push({
        id: response.data.id,
        name: response.data.name,
        image: response.data.sprites.front_default,
        types: response.data.types.map((type) => type.type.name),
        source: "api",
      });
    }

    console.log(pokemons);
    return res.status(200).json({ pokemons: pokemons });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getPokemons;
