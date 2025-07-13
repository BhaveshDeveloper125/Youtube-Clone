import React from "react";
import Cards from "../../Cards/Cards";

import "../VideosSectionOfChannelOwner.css";

function LatestVideos() {
  return (
    <>
      <div id="ChannelOwnerVideoContainer" className=" grid gap-2 grid-cols-4">
        {Array(16)
          .fill()
          .map((_, i) => (
            <Cards key={i} />
          ))}
      </div>
    </>
  );
}

export default LatestVideos;
