import React from "react";
import WatchLaterVideo from "../../Components/WatchLaterVideo/WatchLaterVideo";
import ShortsComponent from "../../Components/ShortsComponent/ShortsComponent";

// import images
import goku from "../../assets/Images/5.jpg";

function NowTrending() {
  return (
    <>
      {[...Array(2)].map((_, i) => (
        <WatchLaterVideo
          key={i}
          img={goku}
          title="video title this is the video title this is the video title  this is the video titlethis is the video titlethis is the video titlethis is the video title"
          channelName="Channel Name Channel Name Channel Name Channel Name "
          views="1M"
          time="1 year"
        />
      ))}
      <div className="h-fit max-w-full p-2 flex gap-2 overflow-x-auto">
        {[...Array(15)].map((_, i) => (
          <div className="h-100 min-w-60">
            <ShortsComponent key={i} />
          </div>
        ))}
      </div>
      {[...Array(48)].map((_, i) => (
        <WatchLaterVideo
          key={i}
          img={goku}
          title="video title this is the video title this is the video title  this is the video titlethis is the video titlethis is the video titlethis is the video title"
          channelName="Channel Name Channel Name Channel Name Channel Name "
          views="1M"
          time="1 year"
        />
      ))}
    </>
  );
}

export default NowTrending;
