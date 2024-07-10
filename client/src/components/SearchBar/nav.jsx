import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";


export default function Nav({ onSearch }) {
    return (
      <div className="nav">
        <div className="links">
          <Link className="link" to="/about">About</Link>
          <Link className="link" to="/home">Home page</Link>
          <Link className="link" to="/favorites">Favorites</Link>
        </div>
        <SearchBar
          onSearch={onSearch}

        />
      </div>
    );
  } 