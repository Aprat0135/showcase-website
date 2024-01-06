import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.css';
import Root from "./routes/root";
import ErrorPage from './pages/error-page';
import Home from './pages/home';
import Shop from './pages/shop';
import Blog from './pages/blog';
import Calender from './pages/calender';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "pages/home",
        element: <Home />
      },
      {
        path: "pages/shop",
        element: <Shop />
      },
      {
        path: "pages/blog",
        element: <Blog />
      },
      {
        path: "pages/calender",
        element: <Calender />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);