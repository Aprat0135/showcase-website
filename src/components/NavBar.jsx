import '../styles/Navbar.css';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
      <div>
        <nav className="NavBar">
          <Link className="NavLink" to="/home">Home</Link>
          <Link className="NavLink" to="/page1">page 1</Link>
          <Link className="NavLink" to="/ErrorPage">ErrorPage</Link>
        </nav>
      </div>
    )
  }