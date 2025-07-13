import React from "react";
import WatchLaterVideo from "../WatchLaterVideo/WatchLaterVideo";

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
        <div className="bg-green-500">
          <WatchLaterVideo
            img={cutie}
            title=" Most Viewed videos : video title this is the video title this is the video title  this is the video titlethis is the video titlethis is the video titlethis is the video title"
            channelName="Channel Name Channel Name Channel Name Channel Name "
            views="1M"
            time="1 year"
          />
        </div>
      </div>
    </>
  );
}

export default VideosSectionOfChannelOwner;
