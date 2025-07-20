import React from "react";
import TopMenu from "../../Components/TopMenu/TopMenu";
import SideMenu from "../../Components/SideMenu/SideMenu";
import Context from "../../Context/Context";
import Cards from "../../Components/Cards/Cards";

import { Link } from "react-router-dom";

function Subscription() {
  return (
    <>
      <Context>
        <TopMenu />

        <div className="h-screen w-fit flex ">
          <SideMenu />

          <div className=" flex flex-col flex-1 flex-wrap overflow-x-hidden  overflow-auto">
            <div className="h-20 w-[96%] bg-white flex justify-between items-center p-8 absolute">
              <h1 className=" font-bold text-xl">Latest</h1>
              <Link to="/allsubs" className="text-blue-500 font-bold text-xl">
                Manage
              </Link>
            </div>
            <br />
            <br />
            <br />
            <div
              className="flex-1 grid 
                          md:grid-cols-2
                          lg:grid-cols-3
                          xl:grid-cols-3
                          2xl:grid-cols-4  
                          overflow-auto"
            >
              {[...Array(25)].map((i) => (
                <Cards key={i} />
              ))}
            </div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default Subscription;
