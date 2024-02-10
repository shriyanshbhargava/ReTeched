import React from "react";
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
      <div className="text-center text-black mt-32 text-6xl font-bold font-Inter tracking-tight">
        Revitalize. Reuse. Recycle.
        <h5 className="text-2xl font-semibold tracking-normal mt-5">
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
          <div className="midSectionCarousel">
            <Carousel />
          </div>
          <div>
            <div className="text-base text-xl mt-3 text-black tracking-normal font-bold">
              Millions unite against e-waste: 53.6 million metric tons saved
              yearly for a greener planet.
            </div>
            {/* <div className="text-5xl mt-20 text-black text-center w-50">
          
        </div> */}
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
            {/* <div className="logoGrid">
          <div className="logoGridDiv">
            <img src="https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/c70d8752079a40241d08ec85dac5f93d/figma-logo.png"></img>
            <img src="https://images.ctfassets.net/spoqsaf9291f/6S40IUVrdki2SlPXQMHKKr/e02c776d183f70c84fa53e077a0f7b1a/pixar.png"></img>
            <img src="https://images.ctfassets.net/spoqsaf9291f/1jlyWNfa8mnYxJtmzu5lpV/4072e10330206f9057fe77ab19ce1bca/doordash.png"></img>
            <img src="https://images.ctfassets.net/spoqsaf9291f/2VtWKmfmToo8n3X7BY0WwA/ccdcd719ee3bc3fa76148eae11d97c51/nike.png"></img>
            <img src="https://images.ctfassets.net/spoqsaf9291f/6dIueLe6mDK6HhNObFq2On/a6cd5c6aa443fe0fc69386522acf7b70/amazon.png"></img>
            <img src="https://images.ctfassets.net/spoqsaf9291f/6WgTu82608DIXfxu9KliYL/326d36bbde762fd9c1800872db81244c/pinterest.png"></img>
          </div>
          <div className="logoGridDiv">
            <img src="https://images.ctfassets.net/spoqsaf9291f/LnKYnStAE4vKs51ejLRj2/69cb3e0382538d4c925208ea24f253f5/General_Electric_logo.svg__1_.png"></img>
            <img src="https://images.ctfassets.net/spoqsaf9291f/3o80U1VqLr5X1nE4kWlZM5/7d1493bad9ba1bd0adf0cf21b6751dd2/uber.png"></img>
            <img src="https://images.ctfassets.net/spoqsaf9291f/2owwRqFrnSdM98Js9Itzih/15cca0ca61fbbaadfeef6b70108ffb42/plaid.png"></img>
            <img src="https://images.ctfassets.net/spoqsaf9291f/18DMuU2Os0OAYiJxqU3aE7/3f2d9ce2c5761513c4f34f41cf85b028/Screen_Shot_2022-09-27_at_11.11_3.png"></img>
            <img src="https://images.ctfassets.net/spoqsaf9291f/346udUCJm76OzP8M0yI78w/81099c4f771df9286782581fe18d0efc/snowflake.png"></img>
            <img src="https://images.ctfassets.net/spoqsaf9291f/xDZNk5XtOxMEiqsiJ6paq/c9958ceead0fb85872449d26186d62b1/headspace__1_.png"></img>
          </div>
          <div className="logoGridDiv">
            <img src="https://images.ctfassets.net/spoqsaf9291f/4r1tX1hoz2RZigBJYbFbBJ/37e1dc9aa41342497d3e35a31649b2ae/angel-list.png"></img>
            <img src="https://images.ctfassets.net/spoqsaf9291f/4AmP2cmuZ2kUwbeSw3ukj9/91ee33f40debced0e8188a0847cb65af/robinhood_logo.png"></img>
          </div>
        </div> */}
          </div>
          {/* <div className="text-5xl mt-20 text-black">
        Consolidate tools.<br></br>
        Cut costs.
        <div className="mt-3">
          <img
            className="relative "
            src="https://i.ibb.co/pxmDTR8/tools-strikethrough-V2-transformed.png"
          ></img>
        </div>
      </div>
      <div className="quoteText tracking-normal">
        "We got rid of nearly a dozen different tools because of <br></br>
        what Notion does for us."
      </div>
      <div className="flex flex-row mt-4">
        <div>
          <img
            width={130}
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=256/front-static/shared/logos/color/metalab.png"
          ></img>
        </div>
        <div className="flex flex-column align-left">
          <span className="nameDiv">
            <b>Justin Watt</b>
          </span>
          <span className="nameDiv">
            Director of Ops & Marketing, MetaLab
          </span>
        </div>
      </div>
      <div className="flex flex-column items-start">
        <div className="flex justify-center items-center mt-5 ">
          <img
            width={200}
            src="https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/shared/illustrations/blocks/topPeekI.png"
          ></img>
          <div className="p-5 text-5xl text-black">
            Powerful building blocks
          </div>
        </div>
        <FontAwesomeIcon icon={faShuffle} color="#0B85D0" width={30} />
        <span className="text-lg tracking-normal text-black">
          Visualize, filter & sort any way you want
        </span>
        <span className="text-base tracking-normal text-black w-50 font-normal">
          Show only tasks assigned to you, or items marked as urgent. Break
          down any project in the way that’s most helpful to you.
        </span>
      </div>
      <div className="w-50 mt-4">
        <Carousel />
      </div>
      <div className="midContainerParentDiv">
        <div className="midContainer">
          <FontAwesomeIcon icon={faShuffle} color="#0B85D0" width={30} />
          <div className="font-bold text-lg text-left tracking-tight text-black">
            Visualize, filter & sort any way you want
          </div>
          <div className="text-base tracking-tight text-black mt-1 font-normal">
            Show only tasks assigned to you, or items marked as urgent.
            Break down any project in the way that’s most helpful to you.
          </div>
          <img
            className="mt-2"
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/customize-info.png"
          ></img>
        </div>
        <div className="midContainer">
          <FontAwesomeIcon icon={faPalette} color="#0B85D0" width={30} />
          <div className="font-bold text-lg text-left tracking-tight text-black">
            Build any page, communicate any idea
          </div>
          <div className="text-base tracking-tight text-black mt-1 font-normal">
            Everything is drag and drop in Notion — images, toggles,
            to-do’s, even embedded databases.
          </div>
          <img
            className="mt-2"
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/customize-info.png"
          ></img>
        </div>
      </div>
      <div className="quoteText tracking-normal">
        "We got rid of nearly a dozen different tools because of <br></br>
        what Notion does for us."
      </div>
      <div className="flex flex-row mt-4">
        <div>
          <img
            width={30}
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=48/front-static/shared/logos/color/match-group.png"
          ></img>
        </div>
        <div className="flex flex-column align-left ml-2">
          <span className="nameDiv">
            <b>Rahim Makani</b>
          </span>
          <span className="nameDiv">Director of Product, Matchgroup</span>
        </div>
      </div>
      <div className="text-5xl mt-20 text-black">
        Every team, side-by-side
      </div>
      <div className="flex justify-center mt-5">
        <MDBCarousel showControls showIndicators className="w-75">
          <MDBCarouselItem itemId={1}>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/hr.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="text-base tracking-tight text-black p-2">
              Community meet-up in Tokyo
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/hr.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="text-base tracking-tight text-black p-2">
              Notion ambassador event in New York
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/hr.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="text-base tracking-tight text-black p-2">
              Sharing Notion setups in San Francisco
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={4}>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/hr.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="text-base tracking-tight text-black p-2">
              Coffee pop-up in London
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={5}>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/hr.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="text-base tracking-tight text-black p-2">
              Coffee pop-up in London
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={6}>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/hr.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="text-base tracking-tight text-black p-2">
              Coffee pop-up in London
            </div>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
      <div className="text-5xl mt-20 text-black tracking-tight">
        Join a global movement. <br></br> Unleash your creativity.
      </div>
      <div className="text-base mt-3 text-black tracking-normal font-normal">
        Our vibrant community produces content, teaches courses, and leads
        events all over the world.
      </div>
      <div className="text-base text-blue-700 hover:underline tracking-normal font-normal mt-4">
        <a href="https://www.notion.so/customers">
          {" "}
          Learn More{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ color: "blue-700", paddingLeft: "1px" }}
          />
        </a>
      </div>
      <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/avatars.png" />
      <div className="quantDataDiv">
        <div>
          <span className="text-purple-600 tracking-normal">1M+</span>{" "}
          <p className="text-lg tracking-tight">community members</p>
        </div>
        <div>
          <span className="text-purple-600 tracking-normal">150+</span>{" "}
          <p className="text-lg tracking-tight">community groups</p>
        </div>
        <div>
          <span className="text-purple-600 tracking-normal">50+</span>{" "}
          <p className="text-lg tracking-tight">countries represented</p>
        </div>
      </div>
      <div className="midContainerParentDiv">
        <div className="midContainer">
          <div className="font-bold text-lg text-left tracking-tight text-black">
            An always-on support network
          </div>
          <div className="text-base tracking-tight text-black mt-1 font-normal">
            Swap setups and share tips in over 149 online communities.
          </div>
          <img
            className="mt-2"
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=384/front-static/pages/home/community-icons-V2.png"
          ></img>
        </div>
        <div className="midContainer w-50">
          <div className="font-bold text-lg text-left tracking-tight text-black">
            Choose your language
          </div>
          <div className="text-base tracking-tight text-black mt-1 font-normal">
            Notion currently supports English, Korean, Japanese, French,
            German, Spanish, and Portuguese. With more to come!
          </div>
          <img
            className="mt-2"
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/welcome-to-notion.png"
          ></img>
        </div>
      </div>

      <div className="midContainerParentDiv">
        <MDBCarousel showControls showIndicators className="w-75">
          <MDBCarouselItem itemId={1}>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920,quality=75/front-static/pages/home/community/community-slide-01.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="text-base tracking-tight text-black p-2">
              Community meet-up in Tokyo
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920,quality=75/front-static/pages/home/community/community-slide-02.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="text-base tracking-tight text-black p-2">
              Notion ambassador event in New York
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920,quality=75/front-static/pages/home/community/community-slide-03.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="text-base tracking-tight text-black p-2">
              Sharing Notion setups in San Francisco
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={4}>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920,quality=75/front-static/pages/home/community/community-slide-04.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="text-base tracking-tight text-black p-2">
              Coffee pop-up in London
            </div>
          </MDBCarouselItem>
        </MDBCarousel>
        <div className="midLastContainer mt-0 ml-12 w-50 flex flex-column">
          <div className="flex flex-row">
            <div>
              <img
                width={35}
                src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-deborah.png"
              ></img>
            </div>
            <div className="flex flex-column align-left">
              <span className="nameDiv">
                <b>Justin Watt</b>
              </span>
              <span className="nameDiv">
                Director of Ops & Marketing, MetaLab
              </span>
            </div>
          </div>
          <div className="text-base tracking-tight mt-4 w-75">
            I used to HATE documenting things. And then I started using
            @NotionHQ and I document a lot. A LOT A LOT. Now I just realize
            that it wasn't that I hated documenting, I just hated Google
            Docs.
          </div>
          <div className="flex flex-row mt-4">
            <div>
              <img
                width={35}
                src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-andre.png"
              ></img>
            </div>
            <div className="flex flex-column align-left">
              <span className="nameDiv">
                <b>Justin Watt</b>
              </span>
              <span className="nameDiv">
                Director of Ops & Marketing, MetaLab
              </span>
            </div>
          </div>
          <div className="text-base tracking-tight mt-4 w-75">
            I used to HATE documenting things. And then I started using
            @NotionHQ and I document a lot. A LOT A LOT. Now I just realize
            that it wasn't that I hated documenting, I just hated Google
            Docs.
          </div>
          <div className="flex flex-row mt-4">
            <div>
              <img
                width={35}
                src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-oliver.png"
              ></img>
            </div>
            <div className="flex flex-column align-left">
              <span className="nameDiv">
                <b>Justin Watt</b>
              </span>
              <span className="nameDiv">
                Director of Ops & Marketing, MetaLab
              </span>
            </div>
          </div>
          <div className="text-base tracking-tight mt-4 w-75">
            I used to HATE documenting things. And then I started using
            @NotionHQ and I document a lot. A LOT A LOT. Now I just realize
            that it wasn't that I hated documenting, I just hated Google
            Docs.
          </div>
        </div>
      </div>

      <div className="w-75">
        <div className="text-5xl mt-20 text-black tracking-tight">
          Endless ways to use it
        </div>
        <div className="flex justify-center">
          <div className="midContainer w-50">
            <FontAwesomeIcon icon={faHome} color="#0B85D0" width={30} />
            <div className="font-bold text-lg text-left tracking-tight text-black">
              Company Wiki
            </div>
            <div className="text-base text-blue-700 hover:underline tracking-normal font-normal mt-1">
              <a href="https://www.notion.so/customers">
                {" "}
                Get Template{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "blue-700", paddingLeft: "1px" }}
                />
              </a>
            </div>
            <img
              className="mt-24"
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/company-wiki-template.png"
            ></img>
          </div>
          <div className="midContainer w-25 p-5 ">
            <div>
              <FontAwesomeIcon icon={faFlag} color="#0B85D0" width={30} />
              <div className="font-bold text-lg text-left tracking-tight text-black">
                Product Roadmap
              </div>
              <div className="text-base text-blue-700 hover:underline tracking-normal font-normal mt-1">
                <a href="https://www.notion.so/customers">
                  {" "}
                  Get Template{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "blue-700", paddingLeft: "1px" }}
                  />
                </a>
              </div>
            </div>
            <div className="mt-12">
              <FontAwesomeIcon icon={faFlag} color="#0B85D0" width={30} />
              <div className="font-bold text-lg text-left tracking-tight text-black">
                Product Roadmap
              </div>
              <div className="text-base text-blue-700 hover:underline tracking-normal font-normal mt-1">
                <a href="https://www.notion.so/customers">
                  {" "}
                  Get Template{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "blue-700", paddingLeft: "1px" }}
                  />
                </a>
              </div>
            </div>
            <div className="mt-12">
              <FontAwesomeIcon icon={faFlag} color="#0B85D0" width={30} />
              <div className="font-bold text-lg text-left tracking-tight text-black">
                Product Roadmap
              </div>
              <div className="text-base text-blue-700 hover:underline tracking-normal font-normal mt-1">
                <a href="https://www.notion.so/customers">
                  {" "}
                  Get Template{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "blue-700", paddingLeft: "1px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="midContainer w-25 p-5">
            <div>
              <FontAwesomeIcon icon={faFlag} color="#0B85D0" width={30} />
              <div className="font-bold text-lg text-left tracking-tight text-black">
                Product Roadmap
              </div>
              <div className="text-base text-blue-700 hover:underline tracking-normal font-normal mt-1">
                <a href="https://www.notion.so/customers">
                  {" "}
                  Get Template{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "blue-700", paddingLeft: "1px" }}
                  />
                </a>
              </div>
            </div>
            <div className="mt-12">
              <FontAwesomeIcon icon={faFlag} color="#0B85D0" width={30} />
              <div className="font-bold text-lg text-left tracking-tight text-black">
                Product Roadmap
              </div>
              <div className="text-base text-blue-700 hover:underline tracking-normal font-normal mt-1">
                <a href="https://www.notion.so/customers">
                  {" "}
                  Get Template{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "blue-700", paddingLeft: "1px" }}
                  />
                </a>
              </div>
            </div>
            <div className="mt-12">
              <FontAwesomeIcon icon={faFlag} color="#0B85D0" width={30} />
              <div className="font-bold text-lg text-left tracking-tight text-black">
                Product Roadmap
              </div>
              <div className="text-base text-blue-700 hover:underline tracking-normal font-normal mt-1">
                <a href="https://www.notion.so/customers">
                  {" "}
                  Get Template{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "blue-700", paddingLeft: "1px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="getStartedSection">
        <div className="text-6xl mt-20 text-black">
          Get started for free
        </div>
        <div className="text-base mt-3 text-black tracking-normal font-normal">
          Play around with it first. Pay and add your team later.
        </div>
        <div className="flex justify-center m-4">
          <button
            type="button"
            class="text-white font-semibold tracking-normal bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-4 py-1 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-blue-800 "
          >
            Try Notion free{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: "#FFFFFF", paddingLeft: "3px" }}
            />
          </button>
          <div className="text-base text-blue-700 hover:underline tracking-normal font-normal ml-4 mt-1">
            <a href="https://www.notion.so/customers">
              {" "}
              Request a demo{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "blue-700", paddingLeft: "1px" }}
              />
            </a>
          </div>
        </div>
        <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=750/front-static/pages/home/notion-parade.png"></img>
      </div>
    </div>
  </div> */}
        </div>
      </div>
    </div>
  );
};
