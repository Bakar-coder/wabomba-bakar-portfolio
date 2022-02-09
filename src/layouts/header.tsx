import React from "react";
import { useLocation } from "react-router";

interface HeaderTypes {}

const Header: React.FC<HeaderTypes> = ({}) => {
  const { pathname } = useLocation();
  return (
    <header className="header" id="navbar-collapse-toggle">
      <ul className="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1">
        <li className={pathname === "/" ? "icon-box active" : "icon-box"}>
          <i className="fa fa-home"></i>
          <a href="/">
            <h2>Home</h2>
          </a>
        </li>
        <li className={pathname === "/about" ? "icon-box active" : "icon-box"}>
          <i className="fa fa-user"></i>
          <a href="/about">
            <h2>About</h2>
          </a>
        </li>
        <li
          className={pathname === "/portfolio" ? "icon-box active" : "icon-box"}
        >
          <i className="fa fa-briefcase"></i>
          <a href="/portfolio">
            <h2>Portfolio</h2>
          </a>
        </li>
        <li
          className={pathname === "/contact" ? "icon-box active" : "icon-box"}
        >
          <i className="fa fa-envelope-open"></i>
          <a href="/contact">
            <h2>Contact</h2>
          </a>
        </li>
        <li className={pathname === "/blog" ? "icon-box active" : "icon-box"}>
          <i className="fa fa-comments"></i>
          <a href="/blog">
            <h2>Blog</h2>
          </a>
        </li>
        <li className="icon-box theme-switcher">
          <i className="fa fa-power-off"></i>
          <a href="#">
            <h2>Mode</h2>
          </a>
        </li>
      </ul>

      <nav role="navigation" className="d-block d-lg-none">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul className="list-unstyled" id="menu">
            <li className="active">
              <a href="/">
                <i className="fa fa-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/about">
                <i className="fa fa-user"></i>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="/portfolio">
                <i className="fa fa-folder-open"></i>
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="/contact">
                <i className="fa fa-envelope-open"></i>
                <span>Contact</span>
              </a>
            </li>
            <li>
              <a href="/blog">
                <i className="fa fa-comments"></i>
                <span>Blog</span>
              </a>
            </li>
            <li>
              <a href="#" className="theme-switcher">
                <i className="fa fa-power-off"></i>
                <span>Mode</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
