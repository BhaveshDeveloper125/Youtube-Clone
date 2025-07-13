import React from "react";
import WatchLaterVideo from "../WatchLaterVideo/WatchLaterVideo";
import Cards from "../Cards/Cards";

// Import Css
import "./VideosSectionOfChannelOwner.css";

// Importing Images
import cutie from "../../assets/Images/1.jpeg";

function VideosSectionOfChannelOwner() {
  return (
    <>
      <div className="flex-1 ">
        <div className="w-full p-4 flex gap-4">
          <button className="bg-gray-200 rounded-xl p-2 focus:bg-black focus:text-white cursor-pointer">
            Latest
          </button>
          <button className="bg-gray-200 rounded-xl p-2 focus:bg-black focus:text-white cursor-pointer">
            Popular
          </button>
          <button className="bg-gray-200 rounded-xl p-2 focus:bg-black focus:text-white cursor-pointer">
            Oldest
          </button>
        </div>
        <div
          id="ChannelOwnerVideoContainer"
          className=" grid gap-2 grid-cols-4"
        >
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </>
  );
}

export default VideosSectionOfChannelOwner;
