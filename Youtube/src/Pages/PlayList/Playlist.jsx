import React from "react";
import Context from "../../Context/Context";
import TopMenu from "../../Components/TopMenu/TopMenu";
import SideMenu from "../../Components/SideMenu/SideMenu";
import PlaylistComponent from "../../Components/Playlist/PlaylistComponent";
import Playsection from "../../Components/PlaySection/Playsection";

// Import Images
import goku from "../../assets/Images/5.jpg";

function Playlist() {
  return (
    <>
      <Context>
        <TopMenu />
        <div className="flex">
          <SideMenu />
          <div className="flex gap-2 flex-1 flex-wrap">
            <Playsection />
            <Playsection />
            <Playsection />
            <Playsection />
            <Playsection />
            <Playsection />
            <Playsection />
          </div>
        </div>
      </Context>
    </>
  );
}

export default Playlist;
