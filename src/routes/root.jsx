import { Outlet, Link } from 'react-router-dom';
import achtungBaustelle from './..\\img\\Achtung Baustelle.png';

export default function Root() {
  return (
    <>
      <div class="divH1">
        <h1>Showcase Website</h1>
        <img src={achtungBaustelle}/>
      </div>
      <div id="nav">
        <nav>
          <ul>
            <li>
              <Link to={`/pages/home`}>Home</Link>
            </li>
            <li>
              <Link to={"/pages/shop"}>Shop dummy</Link>
            </li>
            <li>
              <Link to={"/pages/blog"}>Blog dummy</Link>
            </li>
            <li>
              <Link to={"/pages/calender"}>Calender dummy</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}