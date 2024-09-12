import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">로그인 및 회원 가입</div>
      <nav className="header__nav">
        <a href="#about">About</a>
        <a href="#marketplace">Market place</a>
        <a href="#tokens">Tokens</a>
        <a href="#services">Services</a>
      </nav>
      <div className="header__right">CONNECT</div>
    </header>
  );
};

export default Header;