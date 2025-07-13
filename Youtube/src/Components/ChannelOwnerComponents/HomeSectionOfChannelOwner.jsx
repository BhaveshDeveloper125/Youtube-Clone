import React from "react";
import WatchLaterVideo from "../WatchLaterVideo/WatchLaterVideo";
import Cards from "../Cards/Cards";
import ChannelownerPlaylist from "../ChannelOwnerPlaylist/ChannelownerPlaylist";
import "./ChannelOwner.css";

// Import Images
import goku from "../../assets/Images/5.jpg";
import { Link } from "react-router-dom";
import FeaturedChannel from "../FeaturedChannels/FeaturedChannel";

function HomeSectionOfChannelOwner() {
  return (
    <>
      <WatchLaterVideo
        img={goku}
        title=" Most Viewed videos : video title this is the video title this is the video title  this is the video titlethis is the video titlethis is the video titlethis is the video title"
        channelName="Channel Name Channel Name Channel Name Channel Name "
        views="1M"
        time="1 year"
      />
      <br />
      <ChannelownerPlaylist />
      <br />
      <br />
      <ChannelownerPlaylist />
      <br />
      <br />
      <ChannelownerPlaylist />
      <br />
      <br />
      <ChannelownerPlaylist />
      <br />
      <br />

      <h1 className="font-bold text-2xl">Featured Channel</h1>
      <br />
      <br />

      <div id="featured_channel" className="h-fit w-full">
        <FeaturedChannel />
        <FeaturedChannel />
        <FeaturedChannel />
        <FeaturedChannel />
        <FeaturedChannel />
        <FeaturedChannel />
        <FeaturedChannel />
        <FeaturedChannel />
      </div>
    </>
  );
}

export default HomeSectionOfChannelOwner;
