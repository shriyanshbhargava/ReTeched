import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "./Carousel.css";

export default function Carousel() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img
          src="https://i.ibb.co/5s8Ls8M/1.png"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img
          src="https://i.ibb.co/q9R7m82/2.png"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img
          src="https://i.ibb.co/C0yPWK2/3.png"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img
          src="https://i.ibb.co/n66DxTd/4.png"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={5}>
        <img
          src="https://i.ibb.co/SRmQZd9/5.png"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={6}>
        <img
          src="https://i.ibb.co/Hn9ZVXy/6.png"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
