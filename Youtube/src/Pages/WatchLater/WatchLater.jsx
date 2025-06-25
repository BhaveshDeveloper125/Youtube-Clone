import React from "react";
import Context from "../../Context/Context";
import TopMenu from "../../Components/TopMenu/TopMenu";
import SideMenu from "../../Components/SideMenu/SideMenu";
import { Link } from "react-router-dom";

// import images
import goku from "../../assets/Images/5.jpg";

function WatchLater() {
  return (
    <>
      <Context>
        <TopMenu />
        <div className="h-full w-full flex bg-red-500">
          <SideMenu />
          <div className=" flex flex-1 ">
            <div className="h-full w-[30%] bg-[url('assets/Images/5.jpg')] bg-cover bg-center flex justify-center relative">
              <div className="h-full w-full p-4 backdrop-blur-2xl">
                <img
                  src={goku}
                  alt=""
                  className="h-40 w-full rounded-xl object-cover backdrop-blur-2xl"
                />
                <h1 className="p-6 text-white text-2xl font-bold ">
                  Watch Later
                </h1>
                <h1 className="p-6 text-white text-lg">Bhavesh Jadav</h1>
                <span className="pl-6 text-white ">
                  20 videos Updated today
                </span>
                <div className="h-fit w-full p-4 flex gap-2 ">
                  <Link className="w-40 bg-white rounded-full text-black p-2 flex gap-2 justify-center items-center">
                    <i className="fas fa-play"></i> <span>Play all</span>
                  </Link>
                  <Link className="w-40 bg-white rounded-full text-black p-2 flex gap-2 justify-center items-center">
                    <i className="fa-solid fa-shuffle"></i>{" "}
                    <span>Play all</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-full w-[100%] bg-yellow-500 p-2">Bhavesh</div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default WatchLater;
