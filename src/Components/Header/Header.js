import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Scroll from "react-scroll-to-element";

import axios from "axios";

export default function Header() {
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });

          // Use Nominatim API to get city name
          try {
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            );

            if (response.data.address.city) {
              setCity(response.data.address.city);
            } else {
              console.error("City not found in response.");
            }
          } catch (error) {
            console.error("Error fetching city:", error);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      <header>
        <nav class="text-white dark:bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 p-3 flex justify-around">
          <div class="max-w-screen-2xl flex flex-wrap items-center justify-items-start mx-auto">
            <a
              href="../../App.js"
              class="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <img
                src="https://w7.pngwing.com/pngs/419/1015/png-transparent-recycling-paper-waste-label-reuse-endeavor-s-label-recycling-logo-thumbnail.png"
                class="h-8"
                alt=" Logo"
              />
              <span class="flex-row text-lg tracking-tight font-semibold whitespace-nowrap dark:text-black">
                ReTeched
              </span>
            </a>

            <span className="text-black pl-4">|</span>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                class="inline-flex items-end p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div className="text-black flex ml-3">
              {" "}
              <div className="px-2 select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <Link href="/">
                  {" "}
                  <Scroll type="id" element="section-1" offset={-200}>
                    Home
                  </Scroll>
                </Link>
              </div>
              <div className="px-2 select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <Link to="/">
                  <Scroll type="id" element="section-3" offset={-200}>
                    Why Us
                  </Scroll>
                </Link>
              </div>
              <div className="px-2 select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <Link to="/">
                  {" "}
                  <Scroll type="id" element="section-2" offset={-200}>
                    How It Works
                  </Scroll>
                </Link>
              </div>
              <div className="px-2 select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <Link to="/">
                  {" "}
                  <Scroll type="id" element="section-4" offset={-200}>
                    Nearby Centers
                  </Scroll>
                </Link>
              </div>
              <div className="px-2 select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <Link to="/Contact Us">
                  {" "}
                  <Scroll type="id" element="section-5" offset={-200}>
                    Contact Us
                  </Scroll>
                </Link>
              </div>
            </div>
            <span className="text-black pl-4 pr-4">|</span>

            <div
              class="items-end justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <div class="flex self-right pl-5">
                {/* <a
                  href="#"
                  class="text-gray-800 dark:text-black hover:bg-gray-light-200 focus:ring-4 focus:ring-gray-light-200 font-medium rounded-lg text-sm px-4 lg:px-5 lg:py-2.5 mr-2 dark:hover:bg-gray-light-200 focus:outline-none dark:focus:ring-gray-light-200"
                >
                  Log in
                </a> */}
                <button
                  type="button"
                  class="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-blue-800"
                >
                  {location ? (
                    <div>
                      📍Indore
                      {/* <p>City: {city || "Loading city..."}</p> */}
                      {/* <p>Latitude: {location.latitude}</p>
                      <p>Longitude: {location.longitude}</p> */}
                    </div>
                  ) : (
                    <p>Loading location...</p>
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
