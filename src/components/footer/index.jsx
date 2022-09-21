import React from "react";
import "./styles.css";

export const Footer = () => {
  return (
    <div id="contacto" className="footer-container">
      <div className="contact-container">
        <h1 className="message-title">POR CUALQUIER CONSULTA</h1>
        <div className="container-links">
          <a
            href="https://api.whatsapp.com/send?phone=543816564532"
            className="link-wsp"
            target="_blank"
            rel="noreferrer"
          >
            <p className="name-wsp">NEGRA</p>
            <div className="wsp-container">
              <img
                className="image-wsp"
                src="images/whatsapp.png"
                alt="logo wsp"
              />
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=543815760077"
            className="link-wsp"
            target="_blank"
            rel="noreferrer"
          >
            <p className="name-wsp">NEGRO</p>
            <div className="wsp-container">
              <img
                className="image-wsp"
                src="images/whatsapp.png"
                alt="logo wsp"
              />
            </div>
          </a>
        </div>
        <div className="footer-mario">
          © 2022 Created by
          <a
            className="link-mario"
            href="https://api.whatsapp.com/send?phone=5493816599099"
            target="_blank"
            rel="noreferrer"
          >
            Mario A. Conti
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5493816599099"
            className="link-wsp"
            target="_blank"
            rel="noreferrer"
          >
            <div className="wsp-container mario">
              <img
                className="image-wsp mario"
                src="images/whatsapp.png"
                alt="logo wsp"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
