import SearchBar from "../SearchBar/searchBar.jsx";
import styles from "./nav.module.css";


export default function Nav({ onSearch }) {
  return (
    <div className={styles.container}>
      <SearchBar
        onSearch={onSearch}
      />
    </div>

  )

}