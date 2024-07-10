import React, { useState } from 'react';



export default function SearchBar({ onSearch }) {

   const [id, setId] = useState("");

   function handleChange(event) {

      setId(event.target.value);
   }
   return (
      <div className = "containerNav"> 
         < div className = "searchBar"> </div>
         <input
            className= "input"
            type="search"
            onChange={handleChange} />
            
         < button onClick={() => onSearch(id)}>Agregar</button>

      </div>


   );
}