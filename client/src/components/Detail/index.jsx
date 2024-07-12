import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
    let { detailId } = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios(`https://pokeapi.co/api/v2/pokemon/${detailId}`).then(
        ({ data }) => {
            if (data.name) {
            setPokemon(data);
            } else {
            window.alert("No hay pokemones con ese ID");
            }
        }
        );
        return setPokemon({});
    }, [detailId]);

    return (
        <div className={styles.containerPrincipal} >
            <div className={styles.containerInformation}>
                <h1>{pokemon.name}</h1>
                <h2>{pokemon.life}</h2>
                <h2>{pokemon.attack}</h2>
                <h2>{pokemon.defense}</h2>
                <h2>{pokemon.speed}</h2>
                <h2>{pokemon.height}</h2>
                <h2>{pokemon.weight}</h2>
                <h2>{pokemon.type?.name}</h2>
            </div>
            <div className={styles.containerImage}>
                <img className={styles.image} src={pokemon.image} alt=""/>
            </div>

        </div>
);
};

            


export default Detail;