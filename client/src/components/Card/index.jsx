import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";


let onClose =  (49,2)-(52,4)
let { containerCard, containerFavorite, containerData, imageStyle, btn, nameStyle } = styles;

export default function Card({ id, name, image, life, attack, defense, speed,  height, weight, type  }) {
   let dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const [isFav, setIsFav] = useState(false);



   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav({ id, name, image, life, attack, defense, speed,  height, weight, type}));
      }
   }


   return (
      <div className={containerCard}>
         <div className={containerFavorite}>
            {
               isFav ? (
                  <button className={btn} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={btn} onClick={handleFavorite}>🤍</button>
               )
            }
            <button onClick={() => onClose(id)} className={btn}>X</button>
         </div>
         <div className={containerData}>
            <Link to={`/detail/${id}`}>
               <h2 className={nameStyle}>{name}</h2>
            </Link>
            <h2 className={nameStyle}>{image}</h2>
            <h2 className={nameStyle}>{life}</h2>
            <h2 className={nameStyle}>{attack}</h2>
            <h2 className={nameStyle}>{defense}</h2>
            <h2 className={nameStyle}>{speed}</h2>
            <h2 className={nameStyle}>{height}</h2>
            <h2 className={nameStyle}>{weight}</h2>
            <h2 className={nameStyle}>{type}</h2>
            
        
         </div>
         <img src={image} alt="" className={imageStyle} />
      </div>
   )

}