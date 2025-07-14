import React from "react";
import ShortsVideo from "../../ShortsVideo/ShortsVideo";

// import Videos
import a from "../../../assets/Videos/s1.mp4";

function Latest() {
  return (
    <>
      <ShortsVideo
        v={a}
        shortsMenu={shortsMenu}
        setshortsMenu={setshortsMenu}
        comment={comment}
        setcomment={setcomment}
        description={description}
        setdescription={setdescription}
      />
    </>
  );
}

export default Latest;
