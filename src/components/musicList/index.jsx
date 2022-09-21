import React from "react";
import { Link } from "react-scroll";
import "./styles.css";

export const ListWedding = () => {
  return (
    <div id="playlist" className="container-lista-wedding">
      <Link
        className={`back-top`}
        to="/"
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000}
      >
        <img
          className="svg-back-top"
          src="images/back-top.svg"
          alt="back-top"
        />
      </Link>
      <h1
        className="title-section"
        data-aos="fade-right"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        ¿NOS AYUDÁS CON LA MÚSICA?
      </h1>
      <div
        className="container-music"
        data-aos="fade-left"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <p className="description-text">
          Dejanos tu recomendación <br /> de esa canción que no puede faltar y
          bailémosla juntos esa noche!
        </p>
        <div className="container-img-style music-2">
          <img
            className="img-styles"
            src="images/music.png"
            alt="spotify"
            loading="lazy"
          />
        </div>
        <a
          className="link-playlist" style={{fontWeight:400}}
          // TODO:LINK A FORMULARIO CON RECOMENDACIONES
          href="https://forms.gle/Jg32FimKJuLDXcyw9"
          target="_blank"
          rel="noreferrer"
        >
          RECOMENDAR
        </a>
        <a
          className="link-playlist margin-link" style={{fontWeight:400}}
          href="https://open.spotify.com/playlist/0iecGLTiJ7a1zTbXkMU7ZP?si=6274ae4fca154700"
          target="_blank"
          rel="noreferrer"
        >
          PLAYLIST
          <div className="container-img-spotify">
            <img
              className="image-spotify"
              src="images/spotify.png"
              alt="play list link"
            />
          </div>
        </a>
      </div>
    </div>
  );
};
