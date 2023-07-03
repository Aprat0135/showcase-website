import React from "react";
import '../styles/Home.css';
import Navbar from '../components/NavBar';


export default function Home() {
    return (
        <div className="Home">
          <header className="Home-header">
            <Navbar />
          </header>
          <div>
            <h1>Home</h1>
          </div>
        </div>
      );
}