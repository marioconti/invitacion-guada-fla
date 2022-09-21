import React from "react";
import "./styles.css";

export const DressCode = () => {
  return (
    <div id="dress-code" className="container-lista-wedding">
      <h1
        className="title-section margin-distinto"
        data-aos="fade-right"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        DRESS CODE
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
        <p className="description-text" style={{paddingTop:"1.7em"}}>
          La vestimenta para el gran día será 
          <span className="bold"> ELEGANTE</span>
        </p>
        <div className="container-img-style">
          <img
            className="img-styles"
            src="images/dresscode.png"
            alt="dress"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
