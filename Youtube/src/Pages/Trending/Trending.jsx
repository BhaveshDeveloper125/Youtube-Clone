import React from "react";
import SideMenu from "../../Components/SideMenu/SideMenu";
import TopMenu from "../../Components/TopMenu/TopMenu";
import Context from "../../Context/Context";
import WatchLaterVideo from "../../Components/WatchLaterVideo/WatchLaterVideo";

// import gifs
import fire from "../../assets/Gif/fire.gif";
// import images
import goku from "../../assets/Images/5.jpg";

function Trending() {
  return (
    <>
      <Context>
        <TopMenu />
        <div className="h-screen w-screen flex">
          <SideMenu />
          <div className="flex-1 mx-auto px-24">
            <div className="h-fit w-full flex gap-2 items-center">
              <img
                src={fire}
                alt="trending-icon"
                className="size-18 border-red-600  rounded-full rotate-20 mix-blend-multiply"
              />
              <h1 className="text-4xl font-bold">Trending</h1>
            </div>

            <ul className="h-fit w-full border-[1.5px] border-transparent border-b-gray-400 flex gap-16">
              <li
                className={`border-[2px] border-transparent hover:border-b-black outline-none p-1.5 text-[20px] hover:text-black text-gray-400 font-semibold cursor-pointer`}
              >
                Now
              </li>
              <li
                className={`border-[2px] border-transparent hover:border-b-black outline-none p-1.5 text-[20px] hover:text-black text-gray-400 font-semibold cursor-pointer`}
              >
                Music
              </li>
              <li
                className={`border-[2px] border-transparent hover:border-b-black outline-none p-1.5 text-[20px] hover:text-black text-gray-400 font-semibold cursor-pointer`}
              >
                Film
              </li>
              <li
                className={`border-[2px] border-transparent hover:border-b-black outline-none p-1.5 text-[20px] hover:text-black text-gray-400 font-semibold cursor-pointer`}
              >
                Sport
              </li>
            </ul>
            {[...Array(2)].map((_, i) => (
              <WatchLaterVideo
                key={i}
                img={goku}
                title="video title this is the video title this is the video title  this is the video titlethis is the video titlethis is the video titlethis is the video title"
                channelName="Channel Name Channel Name Channel Name Channel Name "
                views="1M"
                time="1 year"
              />
            ))}
          </div>
        </div>
      </Context>
    </>
  );
}

export default Trending;
