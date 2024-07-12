import React, { useState } from 'react';
import styles from '../SearchBar/searchBar.module.css'

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState("");

   function handleChange(event) {

      setId(event.target.value);
   }
   return (
      <div className={styles.containerNav}>
         < div className={styles.searchBar}> </div>
         <input
            className={styles.input}
            type="search"
            onChange={handleChange} />
         < button
            style={{
               lineHeight: "100%",
               border: "2px solid midnightblue",
               backgroundColor: "lightblue",
               color: "black",
               borderRadius: "18px",
               cursor: "pointer",
               fontSize: "16px",
               fontStyle: "italic",
               fontWeight: "bold"
            }} onClick={() => onSearch(id)}>Agregar</button>

      </div>


   );
}
