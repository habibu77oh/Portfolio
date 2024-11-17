import React, { useState } from "react";
import "./header.css";


function Header() {
  const[Toggle,showMenu] = useState(false)
  return (
    <header className="header">
      <nav className="nav container">
        <a href="" className="nav__logo">Habibulloh</a>

        <div className={Toggle? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__iteam"> <i className="uil uil-estate nav__icon"></i>    <a className="nav__link" href="#home">Home</a></li>
            <li className="nav__iteam"> <i className="uil uil-user nav__icon"></i>      <a className="nav__link" href="#about">About</a></li>
            <li className="nav__iteam"> <i className="uil uil-file-alt nav__icon"></i>  <a className="nav__link" href="#skills" >Skills</a></li>
            <li className="nav__iteam"> <i className="uil uil-books nav__icon"></i>     <a className="nav__link" href="#">Project</a></li>
            <li className="nav__iteam"> <i className="uil uil-message nav__icon"></i>   <a className="nav__link" href="#contact">Contact</a></li>
          </ul>
          <i class="uil uil-times nav__close" onClick={() => showMenu (!Toggle)}></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu (!Toggle)}>
          <i class="uil uil-bars "></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
