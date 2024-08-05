const { Types } = require("../db.js");

const postCreateTypes = async (req, res) => {
    const { name } = req.body;

    try {
        // Verificar si el tipo ya existe
        let typeExistente = await Types.findOne({ where: { name } });

        if (typeExistente) {
            return res.status(400).json({ message: "El tipo ya existe" });
        }

        // Crear el nuevo tipo
        let newType = await Types.create({ name });

        res.status(201).json({ message: "El tipo se creó correctamente", type: newType });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al crear el tipo" });
    }
};

module.exports = postCreateTypes;
