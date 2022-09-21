import React from "react";
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const Location = () => {
  return (
    <div className="location-main-container">
      <h1
        id="ceremonia-fiesta"
        className="title-section"
        data-aos="fade-left"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        CEREMONIA Y FIESTA
      </h1>
      <div className="container-location">
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
              className="img-styles"
              src="images/church.png"
              alt="church"
              loading="lazy"
            />
          </div>
          <p className="description-text-two">
            <span className="bold line-heigh">CAPILLA:</span>
            <br /> SAN ANTONIO DE PADUA
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">UBICACIÓN:</span>
            <br /> ROMANO 651,
            <br /> YERBA BUENA, TUCUMÁN
          </p>
          {/* <p className="description-text-two">
            <span className="bold line-heigh">HORARIO:</span>
            <br /> 19:45 HS
          </p> */}
          <a
            className="link-map"
            href="https://goo.gl/maps/P4b1MKf9D9cgwzEk6"
            target="_blank"
            rel="noreferrer"
          >
            COMO LLEGAR
          </a>
          {/* <a
            className="link-map calendar"
            href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NzVwaHY3ZWhnb2ZiZmZwc21saWtrMjkzMm0gdDNkZzd0aGJpZWZhajI3bnNsbjhjdjZqdWNAZw&tmsrc=t3dg7thbiefaj27nsln8cv6juc%40group.calendar.google.com"
            target="_blank"
            rel="noreferrer"
          >
            AGENDAR
          </a> */}
        </div>
        <div
          className="data-location"
          data-aos="fade-left"
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
              src="images/party1.png"
              alt="party"
              loading="lazy"
            />
          </div>
          <p className="description-text-two">
            <span className="bold line-heigh">SALÓN:</span>
            <br /> ESPACIO TAFI I
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">UBICACIÓN:</span>
            <br /> RUTA 313, KM 5.0  <br /> TAFÍ VIEJO, TUCUMÁN
          </p>
          {/* <p className="description-text-two">
            <span className="bold line-heigh">HORARIO:</span>
            <br /> 21:00 HS
          </p> */}
          <a
            className="link-map"
            href="https://goo.gl/maps/PsSZg1eAEM2ixQ3J6"
            target="_blank"
            rel="noreferrer"
          >
            COMO LLEGAR
          </a>
          {/* <a
            className="link-map calendar"
            href="https://calendar.google.com/calendar/u/0/r/eventedit/copy/MzQ5ODNpdTk1dm9iMjdqMWJvZWx0NWx0dnAgdDNkZzd0aGJpZWZhajI3bnNsbjhjdjZqdWNAZw/bWFyaW9jb250aTkxQGdtYWlsLmNvbQ?pli=1&sf=true"
            target="_blank"
            rel="noreferrer"
          >
            AGENDAR
          </a> */}
        </div>
      </div>
    </div>
  );
};
