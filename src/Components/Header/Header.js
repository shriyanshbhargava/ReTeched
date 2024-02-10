import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header() {
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
                ReTech.ed
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
                <Link href="">Home</Link>
              </div>
              <div className="px-2 select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <Link href="">Why Choose Us?</Link>
              </div>
              <div className="px-2 select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <Link href="">How It Works</Link>
              </div>
              <div className="px-2 select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <Link href="../../Pages/Locate.js">Locate Nearby Centers</Link>
              </div>
              <div className="px-2 select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <Link href="">Contact Us</Link>
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
                  Join Us
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
