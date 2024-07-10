const axios = require("axios");
const apiUrl = "https://pokeapi.co/api/v2/pokemon";

const getPokemons = async (req, res) => {
    try {
        const response = await axios(`${apiUrl}`);
        console.log(response.data.results)
        return res.status(200).json({
            pokemons: response.data.results});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = getPokemons;