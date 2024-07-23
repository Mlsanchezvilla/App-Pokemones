import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ id, name, image, types }) {
   return (
      <div className={styles.containerCard}>
         <div className={styles.containerData}>
            <Link to={`/detail/${id}`}>
               <h2 className={styles.nameStyle}>{name}</h2>
            </Link>
            <ul className={styles.typesStyle}>
               {types.map((type, index) => (
                  <li key={index} className={styles.typeStyle}>
                     {type}
                  </li>
               ))}
            </ul>
         </div>
         <img src={image} alt="" className={styles.imageStyle} />
      </div>
   )

}