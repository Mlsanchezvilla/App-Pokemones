import React, { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";

const FormPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        life: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleTypeChange = (event) => {
        const { value } = event.target;
        setFormData({
            ...formData,
            types: formData.types.includes(value)
                ? formData.types.filter((type) => type !== value)
                : [...formData.types, value],
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name || /\d/.test(formData.name)) {
            newErrors.name = "El nombre es requerido y no puede contener números.";
        }
        if (!formData.life || isNaN(formData.life) || formData.life <= 0) {
            newErrors.life = "La vida es requerida y debe ser un número positivo.";
        }
        if (!formData.attack || isNaN(formData.attack) || formData.attack <= 0) {
            newErrors.attack = "El ataque es requerido y debe ser un número positivo.";
        }
        if (!formData.defense || isNaN(formData.defense) || formData.defense <= 0 || formData.defense > 100) {
            newErrors.defense = "La defensa es requerida, debe ser un número positivo y no puede exceder de 100.";
        }
        if (formData.speed && (isNaN(formData.speed) || formData.speed <= 0)) {
            newErrors.speed = "La velocidad debe ser un número positivo.";
        }
        if (formData.height && (isNaN(formData.height) || formData.height <= 0)) {
            newErrors.height = "La altura debe ser un número positivo.";
        }
        if (formData.weight && (isNaN(formData.weight) || formData.weight <= 0)) {
            newErrors.weight = "El peso debe ser un número positivo.";
        }
        if (formData.types.length === 0) {
            newErrors.types = "Debe seleccionar al menos un tipo.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                await axios.post("http://localhost:3001/pokemon", formData);
                alert("¡Pokemon creado exitosamente!");
                setFormData({
                    name: "",
                    image: "",
                    life: "",
                    attack: "",
                    defense: "",
                    speed: "",
                    height: "",
                    weight: "",
                    types: [],
                });
            } catch (error) {
                console.error(error);
                alert("Hubo un error al crear el Pokemon.");
            }
        }
    };

    return (
        <div className={styles.formContainer}>
            <h1>Crear un Nuevo Pokemon</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                </div>
                <div>
                    <label>Imagen:</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Vida:</label>
                    <input
                        type="text"
                        name="life"
                        value={formData.life}
                        onChange={handleChange}
                    />
                    {errors.life && <p className={styles.error}>{errors.life}</p>}
                </div>
                <div>
                    <label>Ataque:</label>
                    <input
                        type="text"
                        name="attack"
                        value={formData.attack}
                        onChange={handleChange}
                    />
                    {errors.attack && <p className={styles.error}>{errors.attack}</p>}
                </div>
                <div>
                    <label>Defensa:</label>
                    <input
                        type="text"
                        name="defense"
                        value={formData.defense}
                        onChange={handleChange}
                    />
                    {errors.defense && <p className={styles.error}>{errors.defense}</p>}
                </div>
                <div>
                    <label>Velocidad:</label>
                    <input
                        type="text"
                        name="speed"
                        value={formData.speed}
                        onChange={handleChange}
                    />
                    {errors.speed && <p className={styles.error}>{errors.speed}</p>}
                </div>
                <div>
                    <label>Altura:</label>
                    <input
                        type="text"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                    />
                    {errors.height && <p className={styles.error}>{errors.height}</p>}
                </div>
                <div>
                    <label>Peso:</label>
                    <input
                        type="text"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                    />
                    {errors.weight && <p className={styles.error}>{errors.weight}</p>}
                </div>
                <div>
                    <label>Tipos:</label>
                    <select multiple={true} value={formData.types} onChange={handleTypeChange}>
                        <option value="fire">Fuego</option>
                        <option value="water">Agua</option>
                        <option value="grass">Planta</option>
                        <option value="electric">Eléctrico</option>
                        <option value="ice">Hielo</option>
                        <option value="fighting">Lucha</option>
                        <option value="poison">Veneno</option>
                        <option value="ground">Tierra</option>
                        <option value="flying">Volador</option>
                        <option value="psychic">Psíquico</option>
                        <option value="bug">Bicho</option>
                        <option value="rock">Roca</option>
                        <option value="ghost">Fantasma</option>
                        <option value="dragon">Dragón</option>
                        <option value="dark">Siniestro</option>
                        <option value="steel">Acero</option>
                        <option value="fairy">Hada</option>
                    </select>
                    {errors.types && <p className={styles.error}>{errors.types}</p>}
                </div>
                <button type="submit">Crear Pokemon </button>
            </form>
        </div>
    );
};

export default FormPage;








