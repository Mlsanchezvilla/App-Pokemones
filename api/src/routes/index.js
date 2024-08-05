const express = require("express");
const router = express.Router();

const getPokemonById = require("../controllers/getPokemonById");
const getPokemons = require("../controllers/getPokemons");
const postCreatePokemon = require("../controllers/postCreatePokemon");
const getPokemonByName = require("../controllers/getPokemonByName");
const postCreateTypes = require("../controllers/postCreateTypes");


router.get("/pokemon/:id", getPokemonById);
router.post("/pokemon/", postCreatePokemon);
router.get("/pokemons/names/search", getPokemonByName);
router.get("/pokemons/", getPokemons);
router.post( "/types/", postCreateTypes);



module.exports = router;
