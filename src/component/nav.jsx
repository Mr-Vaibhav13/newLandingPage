import React, { Component } from 'react';
import "../App.css";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';


import About from "./about";
import Contact from "./contact";
import Home from "./home";



export default class Nav extends Component {
  render() {
    return (
      <Router>
      <div>
         <nav id="nn" class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
    <a className="navbar-brand" href="#"><img className="aa" src="../logo192.png" ></img>Crypto Hunters</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          {/* <a className="nav-link" aria-current="page" as={Link} to={"/home"}>Home</a> */}
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" as={Link} to={"/about"}>About</a> */}
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link leftnav" as={Link} to={"/contact"}>Contact Us</a> */}
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
      </div>
      <div>
      <Routes>
          <Route path="/about" element={<About />} />
            
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      </Router>
    )
  }
}
