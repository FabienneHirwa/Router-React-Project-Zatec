import React, { Component } from "react";
import { Link } from "react-router-dom";


const NavBar = () =>{
    return(
    <ul className="nav justify-content-center">
    <Link to='/'>
  <li className="nav-item">
    <a className="nav-link">Home</a>
  </li>
  </Link>
  <Link to='/addAttendee'>
  <li className="nav-item">
    <a className="nav-link" >Add-Attendee</a>
  </li>
  </Link>
  <Link to='/contact' >
  <li className="nav-item">
    <a className="nav-link">Contact</a>
  </li>
  </Link>
</ul>
    )
}

export default NavBar