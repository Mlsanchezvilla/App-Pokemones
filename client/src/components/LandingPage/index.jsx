import styles from './LandingPage.module.css'
import { useNavigate } from "react-router-dom";


export default function LandingPage() {
   console.log("Landing page")
   const navigate = useNavigate();

   return (
      <div className={styles.container}>
         <button className={styles.button} onClick={() => navigate("/home")}>Inicio</button>
      </div>
   )  
}
