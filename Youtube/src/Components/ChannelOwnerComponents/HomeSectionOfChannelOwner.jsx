import React from "react";
import WatchLaterVideo from "../WatchLaterVideo/WatchLaterVideo";
import Cards from "../Cards/Cards";
import ChannelownerPlaylist from "../ChannelOwnerPlaylist/ChannelownerPlaylist";

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
      <ChannelownerPlaylist />
      <ChannelownerPlaylist />
      <ChannelownerPlaylist />
      <ChannelownerPlaylist />
    </>
  );
}

export default HomeSectionOfChannelOwner;
