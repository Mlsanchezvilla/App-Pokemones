const axios = require("axios");
const { Op } = require("sequelize");
const { Pokemons, Types } = require("../db.js");
const apiUrl = `https://pokeapi.co/api/v2/pokemon/`;

const getPokemonByName = async (req, res) => {
  try {  
    const { name } = req.query;
    let pokemons = [];
    pokemons_db = await Pokemons.findAll({
      include: {
        model: Types,
      },
      where: {
        name: {
          [Op.like]: name
        } 
      },
    });  
    if (pokemons_db.length == 0) {
      console.log(`${apiUrl}/${name}/`)
      const response = await axios.get(`${apiUrl}${name}/`);
      pokemons_api = response.data
      console.log(pokemons_api)
      pokemons.push({
        id: pokemons_api.id,
        name: pokemons_api.name,
        image: pokemons_api.sprites.front_default,
        types: pokemons_api.types.map((type) => type.type.name),
      })
    } else {
      for (const pokemon of pokemons_db) {
        console.log(pokemon)
        pokemons.push({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.image,
          types: pokemon.Types.map((type) => type.name),
        })
      }
    }
    if (pokemons) {
      res.status(200).json({"pokemons": pokemons})
    }
    else {
      res.status(404).json({ message: "No se encontraron pokemons asociados con el nombre" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al obtener los elementos" });
  }
}


module.exports = getPokemonByName;