import { Outlet, Link } from 'react-router-dom';
import ConstructionSign from './..\\img\\ConstructionSign.png';

export default function Root() {
  return (
    <>
      <div class="divH1">
        <h1>Showcase Website</h1>
        <img src={ConstructionSign} alt="ConstructionSign.png"/>
      </div>
      <nav>
        <span><Link to={`/pages/home`}>Home</Link></span>
        <span><Link to={"/pages/shop"}>Shop dummy</Link></span>
        <span><Link to={"/pages/blog"}>Blog dummy</Link></span>
        <span><Link to={"/pages/calender"}>Calender dummy</Link></span>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}