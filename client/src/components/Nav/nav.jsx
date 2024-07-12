import searchBar from "../SearchBar/searchBar";
import styles from "./nav.module.css";
import { Link, NavLink, } from "react-router-dom";
let { container, containerLink, link } = styles;


export default function Nav({ onSearch }) {
  return (
    <div className={container}>
      <div className={containerLink}>
        {/* <Link className={link} to="/about">About</Link> */}
        <Link className={link} to="/home">Home</Link>
        <Link className={link} to="/favorites">Favorites</Link>
      </div>
      <searchBar
        onSearch={onSearch}
        style={{
          height: '10px',
          width: '200px',
          margin: '10px',
          color: 'black',
          padding: '10px',
          fontSize: '25px',
          border: '1px solid #ccc',
          borderRadius: '5px'

        }}
      />


    </div>

  )

}