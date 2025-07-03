import React, { useState } from "react";
import TopMenu from "../../Components/TopMenu/TopMenu";
import SideMenu from "../../Components/SideMenu/SideMenu";
import "../../index.css";
import Context from "../../Context/Context";
import { useContext } from "react";
import Shorts from "../../Pages/Shorts/Shorts.jsx";
import Subscription from "../../Pages/Subscription/Subscription.jsx";
import Cards from "../../Components/Cards/Cards.jsx";

function Home() {
  return (
    <>
      <Context>
        <TopMenu />

        <div className="h-screen w-full flex">
          <SideMenu />

          <div className="flex flex-1 overflow-hidden">
            <div className="flex-1 overflow-auto p-4">
              <div
                className="grid 
                          md:grid-cols-2
                          lg:grid-cols-3
                          xl:grid-cols-3
                          2xl:grid-cols-4
              "
              >
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default Home;
