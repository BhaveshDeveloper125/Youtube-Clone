import React from "react";
import { Link } from "react-router-dom";

// Import Css
import "./WatchLaterVideo.css";

// import images
import goku from "../../assets/Images/5.jpg";

function WatchLaterVideo(prop) {
  return (
    <>
      <Link
        id="watchlater_videos_container"
        className="w-full flex flex-row p-2 hover:bg-gray-100"
      >
        <img
          id="watchlater_img"
          src={prop.img}
          alt="thumbnail"
          className="h-40 w-80 rounded-xl object-cover"
        />
        <div className=" w-full flex felx-1 p-2">
          <div className=" w-[98%]">
            <h1 className="h-fit w-full p-1 line-clamp-1">{prop.title}</h1>
            <div className=" w-full flex">
              <h1 className="h-fit w-[50%] p-1 line-clamp-1">
                {prop.channelName}
              </h1>
              <h1 className="h-fit w-[50%] p-1 line-clamp-1">
                {prop.views} . {prop.time}
              </h1>
            </div>
          </div>
          <div id="watchlater_threedots_menu" className=" w-[2%] ">
            <button className="size-full p-2 flex gap-1 flex-col justify-center relative group cursor-pointer">
              <div className="size-[4px] bg-black rounded-full"></div>
              <div className="size-[4px] bg-black rounded-full"></div>
              <div className="size-[4px] bg-black rounded-full"></div>
              <div className="h-fit w-60 bg-white rounded-xl p-2 shadow-2xl shadow-black/50 absolute top-10 right-4 hidden group-hover:block ">
                <ul>
                  <li className="hover:bg-gray-100 flex gap-2 justify-center items-center p-2">
                    <i className="fa-solid fa-list-ul"></i>
                    Add to queue
                  </li>
                  <li className="hover:bg-gray-100 flex gap-2 justify-center items-center p-2">
                    <i className="fa-solid fa-bookmark "></i>
                    Save to Playlist
                  </li>
                  <li className="hover:bg-gray-100 flex gap-2 justify-center items-center p-2">
                    <i className="fa-solid fa-trash"></i>
                    Remove
                  </li>
                  <li className="hover:bg-gray-100 flex gap-2 justify-center items-center p-2">
                    <i className="fa-solid fa-download"></i>
                    Download
                  </li>
                  <li className="hover:bg-gray-100 flex gap-2 justify-center items-center p-2">
                    <i className="fa-solid fa-share"></i>
                    Share
                  </li>
                  <hr className="bg-gray-400 h-px  border-0" />
                  <li className="hover:bg-gray-100 flex gap-2 justify-center items-center p-2">
                    <i className="fa-solid fa-arrow-up"></i>
                    Move to top
                  </li>
                  <li className="hover:bg-gray-100 flex gap-2 justify-center items-center p-2">
                    <i className="fa-solid fa-arrow-down"></i>
                    Move to Bottom
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default WatchLaterVideo;
