import React from "react";
import WatchLaterVideo from "../WatchLaterVideo/WatchLaterVideo";

// Import Images
import goku from "../../assets/Images/5.jpg";
import { Link } from "react-router-dom";

function HomeSectionOfChannelOwner() {
  return (
    <>
      <WatchLaterVideo
        img={goku}
        title="video title this is the video title this is the video title  this is the video titlethis is the video titlethis is the video titlethis is the video title"
        channelName="Channel Name Channel Name Channel Name Channel Name "
        views="1M"
        time="1 year"
      />
      <div className=" w-full flex">
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
    </>
  );
}

export default HomeSectionOfChannelOwner;
