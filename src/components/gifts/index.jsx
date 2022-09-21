import React from "react";
import "./styles.css";

export const Gifts = () => {
  return (
    <div className="container-main-gifts">
      <h1
        id="regalos"
        className="title-section"
        data-aos="fade-right"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        style={{ marginTop: 0 }}
      >
        NUESTRO REGALO
      </h1>
      <p
        className="description-text"
        data-aos="fade-left"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        Es que nos acompañen en este dia tan especial. Pero si quieres tener un
        detalle <br/> con nosotros  podés colaborar con  nuestra luna de miel
      </p>
      <div
        className="container-gifts"
        data-aos="fade-right"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div className="data-gits">
          <div className="container-img-style ">
            <img
              className="img-styles"
              src="images/honeymoon.png"
              alt="honeymoon"
              loading="lazy"
            />
          </div>
          {/* <p className="description-text-two">
            <span className="bold line-heigh"> CBU:</span>
            <br />
          </p> */}
          {/* <p className="description-text-two">
            <span className="bold line-heigh">ALIAS:</span>
            <br /> SABRI.PRUEBA.TUCU
          </p> */}
          <p className="description-text-two">
            <span className="bold line-heigh">CBU:</span>
            <br />
            0170070140000078474695
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">ALIAS:</span>
            <br />
            jcasagrande
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">TITULAR:</span>
            <br />
            JORGE LUIS CASAGRANDE
          </p>
        </div>
      </div>
      <div
        className="container-gifts"
        data-aos="fade-left"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div className="data-gits">
          <div className="container-img-style letter">
            <img
              className="img-styles"
              src="images/buzon2.png"
              alt="cofre"
              loading="lazy"
            />
          </div>
          <p className="description-text-two" style={{ marginTop: "-40px" }}>
            <span className="bold line-heigh">BUZÓN EN EL SALÓN</span>
          </p>
        </div>
      </div>
    </div>
  );
};
