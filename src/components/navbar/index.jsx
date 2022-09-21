import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Player } from "./MediaPlayer";
import "./styles.css";

export const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  // hamburguesaActive es para que aparezca el icono con el resize
  const [hamburguesaActive, setHamburguesa] = useState(false);
  // menuActive es para manejar el display none
  const [menuActive, setMenuActive] = useState(false);
  // MANEJADOR DEL NAVBAR APARICIÓN Y DESAPARACIÓN

  useEffect(() => {
    window.addEventListener("resize", listenerWidth);
    // window.addEventListener("scroll", fixNav);
    if (width < 980) {
      setHamburguesa(true);
    } else {
      setHamburguesa(false);
      setMenuActive(false);
    }
    return () => {
      // Hacemos esto para que cuando se desmonte el componente se remueva el evento y no se siga ejectuando
      window.removeEventListener("resize", listenerWidth);
      // window.removeEventListener("scroll", fixNav);
    };
  }, [hamburguesaActive, width]);

  const listenerWidth = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div className="container-main-navbar">
      <Player />
      <p className="text-play-music" src="audio/audio.mp3">
        PLAY
      </p>
      {hamburguesaActive ? (
        <div
          className={`container-hamburguesa`}
          onClick={() => setMenuActive(!menuActive)}
        >
          <img
            className="image-hamburguesa"
            src="images/menu-hamburguesa.svg"
            alt="menu-hamburguesa"
          />
        </div>
      ) : (
        <div className={`nav-container`}>
          <div className={`nav`}>
            {/* <Link
              className={`logo-container`}
              to="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              L <span className="letter">&</span> G
            </Link> */}
            <ul className={`links-container`}>
              <li>
                <Link
                  className={`link`}
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                >
                  INICIO
                </Link>
              </li>

              <li>
                <Link
                  className={`link`}
                  to="confirmation"
                  spy={true}
                  smooth={true}
                  // FIXME: REVISAR OFFSET AQUí Y EN HOME
                  offset={-100}
                  duration={1000}
                >
                  CONFIRMAR
                </Link>
              </li>
              <li>
                <Link
                  className={`link`}
                  to="ceremonia-fiesta"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  CEREMONIA Y FIESTA
                </Link>
              </li>
              {/* <li>
                <Link
                  onClick={() => {
                    setMenuActive(false);
                  }}
                  className={`link`}
                  to="hotel"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  ALOJAMIENTOS
                </Link>
              </li> */}
              <li>
                <Link
                  className={`link`}
                  to="regalos"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  REGALOS
                </Link>
              </li>
              <li>
                <Link
                  className={`link`}
                  to="gratitude"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  AGRADECIMIENTO
                </Link>
              </li>
              <li>
                <Link
                  className={`link`}
                  to="playlist"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  PLAYLIST
                </Link>
              </li>
              <li>
                <Link
                  className={`link`}
                  to="contacto"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  CONTACTO
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div
        className={`menu-desplegable ${!menuActive ? "display-none" : null}`}
      >
        <div
          className={`links-burger-container ${
            !menuActive ? "display-none-links" : null
          }`}
        >
          <ul
            className={`list-links-burger ${
              !menuActive ? "display-none-links" : null
            }`}
          >
            <li>
              <Link
                onClick={() => {
                  setMenuActive(false);
                }}
                className={`link`}
                to="/"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                INICIO
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setMenuActive(false);
                }}
                className={`link`}
                to="confirmation"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                CONFIRMAR
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setMenuActive(false);
                }}
                className={`link`}
                to="ceremonia-fiesta"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                CEREMONIA Y FIESTA
              </Link>
            </li>
            {/* <li>
              <Link
                onClick={() => {
                  setMenuActive(false);
                }}
                className={`link`}
                to="hotel"
                spy={true}
                smooth={true}
                offset={-0}
                duration={1000}
              >
                ALOJAMIENTOS
              </Link>
            </li> */}
            <li>
              <Link
                onClick={() => {
                  setMenuActive(false);
                }}
                className={`link`}
                to="regalos"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                REGALOS
              </Link>
            </li>

            <Link
              onClick={() => {
                setMenuActive(false);
              }}
              className={`link`}
              to="gratitude"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              TE ESPERAMOS
            </Link>
            <li>
              <Link
                onClick={() => {
                  setMenuActive(false);
                }}
                className={`link`}
                to="playlist"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                PLAYLIST
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setMenuActive(false);
                }}
                className={`link`}
                to="contacto"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
