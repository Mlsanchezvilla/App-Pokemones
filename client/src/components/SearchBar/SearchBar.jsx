import React, { useState } from 'react';
import styles from '../SearchBar/searchBar.module.css'

export default function SearchBar({ onSearch }) {

   const [name, setName] = useState("");

   function handleChange(event) {
      setName(event.target.value);
   }
   return (
      <div className={styles.containerNav}>
         < div className={styles.containerInput}> 
            <input
               className={styles.input}
               type="search"
               onChange={handleChange}

            />
         </div>
         < button className={styles.button} onClick={() => onSearch(name)}>Agregar</button>
      </div>
   );
}
