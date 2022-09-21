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
        ¿QUERÉS HACERNOS UN REGALO?
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
        Lo más importante para nosotros es que puedas estar ahí presente.
        <br /> Si aparte querés hacernos un regalo,
        <br /> podés ayudarnos con nuestra luna de miel.
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
              style={{ height: 180 }}
              className="img-styles"
              src="images/honneymoon6.png"
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
            0170215840000017124678
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">ALIAS:</span>
            <br />
            Guadi.y.Santi
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">TITULAR:</span>
            <br />
            FLASS SANTIAGO NICOLAS
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
