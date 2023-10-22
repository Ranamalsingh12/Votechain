import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const NavBar = (props) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar" style={{ border: "1px solid white" }}>
      <div className="container">
        <div className="logo">
          <p className="p-tag">VoteChain</p>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}></div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Vote Now</NavLink>
            </li>
            <li>
              <NavLink to="/knowMore">Know More</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
