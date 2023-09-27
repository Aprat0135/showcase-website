import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.css';
import Root from "./routes/root";
//import Home from './pages/Home';
//import ErrorPage from './pages/ErrorPage';
//import Contact from './routes/contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    //errorElement: <ErrorPage />,
    //children: [
    //  {
    //    path: "contacts/:contactId",
    //    element: <Contact />
    //  },
    //  {
    //    path: "home",
    //    element: <Home />,
    //  }
    //]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);