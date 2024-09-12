import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <div>로고명 및 로고 삽입</div>
          <div>Copyright 2024 Hash Pet powered by Pet Tower Rights Reserved</div>
        </div>
        <div className="footer__center">
          <div className="footer__section">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer__section">
            <h4>Resources</h4>
            <a href="#whitepaper">Whitepaper</a>
            <a href="#explorer">Explorer</a>
            <a href="#brand-press">Brand&Press</a>
          </div>
          <div className="footer__section">
            <h4>Legal</h4>
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
          </div>
          <div className="footer__section">
            <h4>Socials</h4>
            <a href="#medium">Medium</a>
            <a href="#telegram">Telegram</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
        <div className="footer__right">
          <h4>TOUCHED WITH HASH PET COMMUNITY</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;