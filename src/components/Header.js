import React from 'react';
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Taskmate" />
            <span>TaskMate</span>
        </div>
    </header>
  )
}

export default Header