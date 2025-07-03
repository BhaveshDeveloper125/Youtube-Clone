import React from "react";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";

function ChannelownerPlaylist() {
  return (
    <>
      <div className=" w-full ">
        <div className="w-full flex">
          <div className=" w-[92%] line-clamp-2">
            <h1 className="text-2xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              velit sed cum commodi animi quam reprehenderit alias, nulla quae!
              Adipisci quam omnis architecto laboriosam sequi animi sint eveniet
              nostrum ea.
            </h1>
          </div>
          <div className=" w-[8%] p-1 ">
            <Link className=" hover:bg-gray-300 rounded-xl flex gap-2 justify-center items-center p-2 ">
              <i className="fas fa-play"></i>
              Play all
            </Link>
          </div>
        </div>
        <h1 className="text-gray-500 p-1 line-clamp-2">
          Descrition of the playlist Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Placeat aspernatur tempora iure temporibus? Est
          itaque rem dolor nostrum odit accusamus vero, sit debitis quasi harum
          officiis laboriosam fugit, atque esse! Descrition of the playlist
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          aspernatur tempora iure temporibus? Est itaque rem dolor nostrum odit
          accusamus vero, sit debitis quasi harum officiis laboriosam fugit,
          atque esse!
        </h1>
      </div>
      <div
        className=" h-100 w-full p-2 flex justify-between items-center overflow-y-hidden overflow-x-auto
      "
      >
        <div className="h-96 w-1/3 flex-none">
          <Cards />
        </div>
        <div className="h-96 w-1/3 flex-none">
          <Cards />
        </div>
        <div className="h-96 w-1/3 flex-none">
          <Cards />
        </div>
        <div className="h-96 w-1/3 flex-none">
          <Cards />
        </div>
        <div className="h-96 w-1/3 flex-none">
          <Cards />
        </div>
        <div className="h-96 w-1/3 flex-none">
          <Cards />
        </div>
        <div className="h-96 w-1/3 flex-none">
          <Cards />
        </div>
        <div className="h-96 w-1/3 flex-none">
          <Cards />
        </div>
      </div>
    </>
  );
}

export default ChannelownerPlaylist;
