import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Humburger from "./humburger.png";

const Navbar = () => {
  const [shownav,setshownav] = useState(false);
   
  return (
    <>
       <nav className="nv">
          <label for="check" className="checkbtn">
            <a href="#" onClick={()=> setshownav(!shownav)}>  <img src={Humburger} alt="" /> </a>
          </label>
          <span className="logo"> Logo </span>
          <ul className={shownav?"checkbtn":"mobile-nav"}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </ul>
        </nav>
        </> 
  );
};

export default Navbar;
