import { Outlet, Link } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <h1>Showcase Website</h1>
      <div id="nav">
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={"/pages/shop"}>Shop dummy</Link>
            </li>
            <li>
              <Link to={"/pages/blog"}>Blog dummy</Link>
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