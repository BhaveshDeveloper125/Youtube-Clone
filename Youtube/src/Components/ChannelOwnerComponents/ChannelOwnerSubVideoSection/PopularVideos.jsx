import React from "react";
import Cards from "../../Cards/Cards";

import "../VideosSectionOfChannelOwner.css";

function PopularVideos() {
  return (
    <>
      <div id="popularvideosection" className=" grid gap-2 grid-cols-4">
        {Array(8)
          .fill()
          .map((_, i) => (
            <Cards key={i} />
          ))}
      </div>
    </>
  );
}

export default PopularVideos;
