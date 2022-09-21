import React from "react";
import "./styles.css";
import Carousel from "react-material-ui-carousel";

export const Gratitude = () => {
  return (
    <div id="gratitude" className="gratitude-container">
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
        CADA VEZ FALTA MENOS
      </h1>
      <p
        className="description-text width-gratitude"
        data-aos="fade-left"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        Queremos darles las gracias a todos: amigos, familiares y seres queridos
        que nos han acompañado desde siempre.
        <br /> Es una alegría gigante para nosotros poder compartir este momento
        con ustedes. Esperamos que nos sigan acompañando ahora y siempre!
      </p>
      <Carousel
        animation="slide"
        duration={800}
        navButtonsAlwaysVisible={true}
        className="carousel-mui-proyect"
        fullHeightHover={false}
        indicators={false}
        navButtonsProps={{
          style: {
            backgroundColor: "var(--color-3)",
            borderRadius: 0,
          },
        }}
        autoPlay={false}
        stopAutoPlayOnHover={false}
        swipe={false}
      >
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-guada-fla/4.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-guada-fla/9.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-guada-fla/5.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-guada-fla/2.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-guada-fla/12.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-guada-fla/15.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-guada-fla/18.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-guada-fla/14.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-guada-fla/13.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
      </Carousel>
    </div>
  );
};
