import React from "react";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img
          src="https://in.bmscdn.com/webin/common/icons/logo.svg"
          alt="BookMyShow Logo"
        />
      </div>
      <ul className="navbar__links">
        <li className="navbar__link">
          <a href="#">Movies</a>
        </li>
        <li className="navbar__link">
          <a href="#">Events</a>
        </li>
        <li className="navbar__link">
          <a href="#">Plays</a>
        </li>
        <li className="navbar__link">
          <a href="#">Sports</a>
        </li>
        <li className="navbar__link">
          <a href="#">Activities</a>
        </li>
        <li className="navbar__link">
          <a href="#">Buzz</a>
        </li>
      </ul>
      <div className="navbar__search">
        <input type="text" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
        <button>Search</button>
      </div>
      <div className="navbar__user">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;
