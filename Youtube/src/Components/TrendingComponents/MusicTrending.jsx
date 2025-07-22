import React from "react";
import WatchLaterVideo from "../WatchLaterVideo/WatchLaterVideo";

// import images
import goku from "../../assets/Images/5.jpg";

function MusicTrending() {
  return (
    <>
      {[...Array(4)].map((_, i) => (
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
      <br />
      <br />
    </>
  );
}

export default MusicTrending;
