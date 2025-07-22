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
      <div className="h-fit w-full mb-4 ">
        <h1 className="p-6 text-xl font-bold"> Trending Shorts </h1>
        <div className="h-fit w-full flex-1 flex gap-4 overflow-x-auto">
          {[...Array(15)].map((_, i) => (
            <div className="flex-none w-1/4 aspect-[1/1.5]" key={i}>
              <ShortsComponent />
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      {[...Array(30)].map((_, i) => (
        <WatchLaterVideo
          key={i}
          img={goku}
          title="video title this is the video title this is the video title  this is the video titlethis is the video titlethis is the video titlethis is the video title"
          channelName="Channel Name Channel Name Channel Name Channel Name "
          views="1M"
          time="1 year"
        />
      ))}
      <h1 className="p-6 text-xl font-bold"> Trending Shorts </h1>
      {[...Array(10)].map((_, i) => (
        <WatchLaterVideo
          key={i}
          img={goku}
          title="video title this is the video title this is the video title  this is the video titlethis is the video titlethis is the video titlethis is the video title"
          channelName="Channel Name Channel Name Channel Name Channel Name "
          views="1M"
          time="1 year"
        />
      ))}
      <br />
      <br />
    </>
  );
}

export default NowTrending;
