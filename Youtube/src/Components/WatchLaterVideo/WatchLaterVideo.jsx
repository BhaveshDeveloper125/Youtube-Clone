import React from "react";
// import images
import goku from "../../assets/Images/5.jpg";
import { Link } from "react-router-dom";

function WatchLaterVideo() {
  return (
    <>
      <Link className="w-full flex p-2 hover:bg-gray-100">
        <img
          src={goku}
          alt="thumbnail"
          className="h-40 w-80 rounded-xl object-cover"
        />
        <div className="w-full  flex felx-1 flex-col p-2">
          <h1 className="h-fit w-full p-1 line-clamp-1">
            video title Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Obcaecati unde saepe odio? Placeat nostrum quisquam corporis
            reiciendis rem officia culpa enim dolor dignissimos quasi. Tempore
            distinctio repellendus minus blanditiis facere.
          </h1>
          <div className="w-full flex">
            <h1 className="h-fit w-[50%] p-1 line-clamp-1">
              Channel Name Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Obcaecati unde saepe odio? Placeat nostrum quisquam corporis
              reiciendis rem officia culpa enim dolor dignissimos quasi. Tempore
              distinctio repellendus minus blanditiis facere.
            </h1>
            <h1 className="h-fit w-[50%] p-1 line-clamp-1">
              1M views . 1 Year Ago
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
}

export default WatchLaterVideo;
