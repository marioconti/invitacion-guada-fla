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
        GRACIAS
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
        No queremos dejar de agradecerles por ser parte de este día tan importante para nosotros, también por ser parte de nuestra historia y de todo el camino que recorrimos hasta aquí.<br/> A nuestra familia, amigos y a todos los que estuvieron, están y sin dudas sabemos que seguirán estando, muchas gracias! <br/>¡Estamos felices de compartirlo <br/>con todos ustedes!
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
            src="images/photos-negro-agus/1.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-negro-agus/7.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-negro-agus/5.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-negro-agus/6.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-negro-agus/8.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-negro-agus/10.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-negro-agus/9.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-negro-agus/11.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-negro-agus/12.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
      </Carousel>
    </div>
  );
};
