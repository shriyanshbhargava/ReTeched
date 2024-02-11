import React, { useRef } from "react";
import "animate.css";
import ContactForm from "../Components/ContactUs/Contact";

import {
  faArrowRight,
  //   faShuffle,
  //   faPalette,
  //   faHome,
  //   faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "../Components/Carousel/Carousel";
// import Footer from "../Components/Footer/Footer";
// import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export const Home = () => {
  return (
    <div>
      <div
        id="section-1"
        className="text-center text-black mt-32 text-6xl font-bold font-Inter tracking-tight "
      >
        <span className="animate__animated animate__fadeInUp">
          Revitalize. Reuse. Recycle.
        </span>
        <h5 className="text-2xl font-semibold tracking-normal mt-5  animate__animated animate__fadeInUp">
          ReTech.ed is Where Sustainability Meets Innovation for a Greener
          Tomorrow.
        </h5>
        <div className="midSection">
          <img
            width={500}
            src="https://img.freepik.com/free-vector/government-mandated-recycling-abstract-concept-vector-illustration-ecological-regulations-local-recycling-law-municipal-solid-waste-recyclable-materials-curbside-program-abstract-metaphor_335657-5808.jpg?w=740&t=st=1707542616~exp=1707543216~hmac=b445c2137b0b80560f3149d511646fe1f0098ca6f75e0e5b7108a418fb2b2e49"
          ></img>
          <div>
            <button></button>
          </div>

          <h5
            className="text-5xl p-2 font-semibold tracking-normal mt-5 animate__animated animate__fadeInUp"
            id="section-2" 
          >
            How It Works.
          </h5>
          <div className="midSectionCarousel">
            <img
              alt="no data found"
              className="animate__animated animate__fadeInUp"
              src="https://i.postimg.cc/wTHpcbZv/final.png"
              style={{ width: "1800px" }}
            />
          </div>
          <h5
            id="section-3"
            className="text-5xl p-5 font-semibold tracking-normal mt-5 "
          >
            Why Us?
          </h5>
          <div>
            <div className="text-base p-2 text-xl mt-3 text-black tracking-normal font-bold">
              Millions unite against e-waste: 53.6 million metric tons saved
              yearly for a greener planet.
            </div>
            <div className="text-5xl mt-20 text-black text-center w-50"></div>
            <div className="text-base mt-3 text-black tracking-normal font-normal">
              Catalyzing Sustainable Progress, from Innovators to Icons in
              E-Waste Management.
            </div>
            <div className="text-base text-blue-700 hover:underline tracking-normal font-normal mt-2">
              <a href="www.google.com">
                {" "}
                Read stories{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "blue-700", paddingLeft: "1px" }}
                />
              </a>
            </div>
            <h5
              id="section-4"
              className="text-5xl p-5 font-semibold tracking-normal mt-5"
            >
              Locate Nearby Facilities.
            </h5>
            <div
              style={{
                maxWidth: "100%",
                overflow: "hidden",
                color: "red",
                width: "1000px",
                height: "400px",
              }}
            >
              <div
                className="pb-4"
                id="embed-map-canvas"
                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
              >
                <iframe
                  title="Map"
                  style={{
                    maxWidth: "100%",
                    overflow: "hidden",
                    color: "red",
                    width: "1000px",
                    height: "400px",
                  }}
                  frameborder="0"
                  src="https://www.google.com/maps/embed/v1/search?q=e+waste+facility+near+me&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                ></iframe>
              </div>
              <div id="section-5">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
