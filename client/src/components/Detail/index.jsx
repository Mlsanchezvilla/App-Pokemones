import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
    let { detailId } = useParams();
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        axios(`http://localhost:3001/pokemon/${detailId}`).then(
            ({ data }) => {
                if (data.pokemon) {
                    setPokemon(data.pokemon);
                } else {
                    window.alert("No hay pokemones con ese ID");
                }
            })
            .catch(error => {
                setError("No se pudo cargar el pokemon");
            })
            .finally(() => {
                setLoading(false);
            });
    
            return () => setPokemon({});
        }, [detailId]);

        if (loading) return <div>Loading...</div>;
        if (error) return <div>{error}</div>;

    return (
        <div className={styles.containerPrincipal} >
            <div className={styles.containerInformation}>
                <h1>{pokemon.name}</h1>
                <h2> Life: {pokemon.life}</h2>
                <h2> Attack: {pokemon.attack}</h2>
                <h2> Defense: {pokemon.defense}</h2>
                {
                    pokemon.speed && <h2> Speed: {pokemon.speed}</h2>
                }
                {
                    pokemon.height && <h2> Height: {pokemon.height}</h2>
                }
                {
                    pokemon.weight && <h2> Weight: {pokemon.weight}</h2>
                }
                <h2> Types:</h2>
                <ul>
                    {pokemon.types?.map((type) => (<li key={type}>{type}</li>))}
                </ul>
            </div>
            <div className={styles.containerImage}>
                <img className={styles.image} src={pokemon.image} alt={pokemon.name} />
            </div>

        </div>
    );
};




export default Detail;