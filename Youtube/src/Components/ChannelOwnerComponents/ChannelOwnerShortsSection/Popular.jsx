import React from "react";
import ShortsComponent from "../../ShortsComponent/ShortsComponent";

function Popular() {
  return (
    <>
      <div className="h-fit flex-1 grid gap-4 grid-cols-4 ">
        {[...Array(4)].map((_, i) => (
          <div className=" aspect-[1/1.5]">
            <ShortsComponent key={i} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Popular;
