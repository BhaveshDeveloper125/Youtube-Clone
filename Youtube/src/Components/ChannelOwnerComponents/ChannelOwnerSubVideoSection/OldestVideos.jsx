import React from "react";
import Cards from "../../Cards/Cards";

import "../VideosSectionOfChannelOwner.css";

function OldestVideos() {
  return (
    <>
      <div id="oldestvideosection" className=" grid gap-2 grid-cols-4">
        {Array(4)
          .fill()
          .map((_, i) => (
            <Cards key={i} />
          ))}
      </div>
    </>
  );
}

export default OldestVideos;
