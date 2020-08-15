import React from "react";
import "../components/Navabar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm py-0 bg-light">
      <a className="navbar-brand py-0" href="#">
        <img
          className="mr-1 align-baseline"
          src="https://news.ycombinator.com/y18.gif"
          width="18"
          height="18"
          style={{ border: "1px white solid" }}
        ></img>
        <b>HackerNews</b>
      </a>
      <ul className="navbar-nav">
        <li className="nav-item  border-left border-dark">
          <a className="nav-link">new</a>
        </li>
        <li className="nav-item  border-left border-dark">
          <a className="nav-link">past</a>
        </li>
        <li className="nav-item  border-left border-dark">
          <a className="nav-link">comment</a>
        </li>
        <li className="nav-item  border-left border-dark">
          <a className="nav-link">ask</a>
        </li>
        <li className="nav-item  border-left border-dark">
          <a className="nav-link">show</a>
        </li>
        <li className="nav-item  border-left border-dark">
          <a className="nav-link">job</a>
        </li>
        <li className="nav-item border-right border-left border-dark">
          <a className="nav-link">submit</a>
        </li>
      </ul>
      <a className="text-dark ml-auto" href="#">
        Login
      </a>
    </nav>
  );
};

export default Navbar;
