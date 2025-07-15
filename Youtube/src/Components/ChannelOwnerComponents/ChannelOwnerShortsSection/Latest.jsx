import React from "react";
import ShortsVideo from "../../ShortsVideo/ShortsVideo";
import ShortsComponent from "../../ShortsComponent/ShortsComponent";

// import Videos
import a from "../../../assets/Videos/s1.mp4";

function Latest() {
  return (
    <>
      {/* <ShortsVideo
        v={a}
        shortsMenu={shortsMenu}
        setshortsMenu={setshortsMenu}
        comment={comment}
        setcomment={setcomment}
        description={description}
        setdescription={setdescription}
      /> */}
      <div className="h-fit flex-1 grid gap-4 grid-cols-4 ">
        {[...Array(8)].map((_, i) => (
          <div className=" aspect-[1/1.5]">
            <ShortsComponent key={i} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Latest;
