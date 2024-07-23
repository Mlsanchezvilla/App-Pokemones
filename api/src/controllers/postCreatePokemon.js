const { Pokemons, Types } = require("../db.js");

const postCreatePokemon = async (req, res) => {
    console.log(req.body);
    const { name, image, life, attack, defense, height, weight, speed, types } = req.body;
    try {
        newPokemon = await Pokemons.create({
            name,
            image,
            life,
            attack,
            defense,
            speed,
            height,
            weight,

        });
        console.log(newPokemon)
        for ( type_ of types) {

            let TypesExistentes = await Types.findOne({where: { name: type_ }});

            if(!TypesExistentes) {
                TypesExistentes = await Types.create({name: type_});
            }
            
            try {
                await newPokemon.addTypes(TypesExistentes);
            } catch (error) {
                console.log(error);
            }

        }
        res.status(201).json({ message: "El Pokemon se creo correctamente" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al obtener el Pokemon" });
    }
};

module.exports = postCreatePokemon;
