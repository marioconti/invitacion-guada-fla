import React from "react";
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ListadoAlojamientosTafi2022 from "../../assets/ListadoAlojamientosTafi2022.pdf";

AOS.init();

export const Hotel = () => {
  return (
    <div  id="hotel" className="location-main-container">
      <h1
        id="hotel"
        className="title-section titulo-section-hotel"
        data-aos="fade-left"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        ¿BUSCAN DONDE QUEDARSE?
      </h1>
      <p
        className="description-text"
        data-aos="fade-right"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        Las celebraciones serán en <br /> Tafí del Valle. <br /> A continuación les comportimos un listado con distintas opciones de alojamientos
      </p>
      <div className="container-location-hotel">
        <div
          className="data-location"
          data-aos="fade-right"
          data-aos-offset="-200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <div className="container-img-style">
            <img
              className="img-styles couple-dance"
              src="images/hotel2.png"
              alt="party"
              loading="lazy"
            />
          </div>

          <a
            className="link-map"
            href={ListadoAlojamientosTafi2022}
            download={ListadoAlojamientosTafi2022}
            style={{ textDecoration: "none", backgroundColor:"#c9865d" }}
            target="_blank"
            rel="noreferrer"
          >
            DESCARGAR LISTADO
          </a>
        </div>
      </div>
    </div>
  );
};
