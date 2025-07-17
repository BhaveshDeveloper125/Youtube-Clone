import React from "react";
import Cards from "../Cards/Cards";

function LiveSectionOfChannelOwner() {
  return (
    <>
      <div
        className="h-fit w-full grid 
        lg:grid-cols-4 
        md:grid-cols-2
      "
      >
        {[...Array(4)].map((_, i) => (
          <Cards key={i} />
        ))}
      </div>
    </>
  );
}

export default LiveSectionOfChannelOwner;
