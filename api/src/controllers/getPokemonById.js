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
        pokemon = {
          id: pokemon_db.id,
          name: pokemon_db.name,
          image: pokemon_db.image,
          types: pokemon_db.Types.map((type) => type.name),
          life: pokemon_db.life,
          attack: pokemon_db.attack,
          defense: pokemon_db.defense,
          speed: pokemon_db.speed,
          height: pokemon_db.height,
          weight: pokemon_db.weight,
        };
      } else {
        const response = await axios.get(`${apiUrl}${ID}`);
        pokemon = {
          id: ID,
          name: response.data.name,
          image: response.data.sprites.front_default,
          life: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          types: response.data.types.map((type) => type.type.name),
          speed: response.data.stats[5].base_stat,
          height: response.data.height,
          weight: response.data.weight,
        };
      }
      if (pokemon) {
        res.status(200).json({"pokemon": pokemon})
      }
      else {
        res.status(404).json({ message: "No se encontro el pokemon" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error al obtener el elemento" });
    }
  };

module.exports = getPokemonById;