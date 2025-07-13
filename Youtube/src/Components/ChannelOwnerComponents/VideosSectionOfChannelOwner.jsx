import React, { useState } from "react";
import WatchLaterVideo from "../WatchLaterVideo/WatchLaterVideo";
import Cards from "../Cards/Cards";
import LatestVideos from "./ChannelOwnerSubVideoSection/LatestVideos";
import PopularVideos from "./ChannelOwnerSubVideoSection/PopularVideos";
import OldestVideos from "./ChannelOwnerSubVideoSection/OldestVideos";

// Import Css
import "./VideosSectionOfChannelOwner.css";

// Importing Images
import cutie from "../../assets/Images/1.jpeg";

function VideosSectionOfChannelOwner() {
  const [video, setvideo] = useState(1);
  const DisplayVideo = {
    1: <LatestVideos />,
    2: <PopularVideos />,
    3: <OldestVideos />,
  };
  return (
    <>
      <div className="flex-1 ">
        <nav className="h-fit w-full ">
          <ul className="h-fit w-full p-2 flex gap-2">
            <li
              onClick={() => setvideo(1)}
              className={` ${
                video === 1
                  ? `bg-black text-white rounded-xl p-2 cursor-pointer`
                  : `bg-gray-200 rounded-xl p-2  cursor-pointer`
              }`}
            >
              Latest
            </li>
            <li
              onClick={() => setvideo(2)}
              className={` ${
                video === 2
                  ? `bg-black text-white rounded-xl p-2 cursor-pointer`
                  : `bg-gray-200 rounded-xl p-2  cursor-pointer`
              }`}
            >
              Popular
            </li>
            <li
              onClick={() => setvideo(3)}
              className={` ${
                video === 3
                  ? `bg-black text-white rounded-xl p-2 cursor-pointer`
                  : `bg-gray-200 rounded-xl p-2  cursor-pointer`
              }`}
            >
              Oldest
            </li>
          </ul>
        </nav>

        {DisplayVideo[video]}
      </div>
    </>
  );
}

export default VideosSectionOfChannelOwner;
