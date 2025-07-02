import React, { Component, useState } from "react";
import Context from "../../Context/Context";
import TopMenu from "../../Components/TopMenu/TopMenu";
import SideMenu from "../../Components/SideMenu/SideMenu";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Import ChannelOwner Components
import HomeSectionOfChannelOwner from "../../Components/ChannelOwnerComponents/HomeSectionOfChannelOwner";
import LiveSectionOfChannelOwner from "../../Components/ChannelOwnerComponents/LiveSectionOfChannelOwner";
import PlaylistsSectionOfChannelOwner from "../../Components/ChannelOwnerComponents/PlaylistsSectionOfChannelOwner";
import PostSectionOfChannelOwner from "../../Components/ChannelOwnerComponents/PostSectionOfChannelOwner";
import ShortsSectionOfChannelOwner from "../../Components/ChannelOwnerComponents/ShortsSectionOfChannelOwner";
import VideosSectionOfChannelOwner from "../../Components/ChannelOwnerComponents/VideosSectionOfChannelOwner";

// Import Icons
import ringBell from "../../assets/Icons/ring bell.svg";

// import Images
import rengoku from "../../assets/Images/rengoku.jpg";

function ChannelOwner() {
  const params = useParams();
  const [ActiveComponent, setActiveComponent] = useState(1);

  const ChannelOwnerComponents = {
    1: <HomeSectionOfChannelOwner />,
    2: <VideosSectionOfChannelOwner />,
    3: <ShortsSectionOfChannelOwner />,
    4: <LiveSectionOfChannelOwner />,
    5: <PlaylistsSectionOfChannelOwner />,
    6: <PostSectionOfChannelOwner />,
  };

  return (
    <>
      <Context>
        <TopMenu />
        <div className="flex">
          <SideMenu />
          <div className=" h-screen flex justify-center items-center flex-1 overflow-auto">
            <div
              className="h-screen
                        lg:w-[85%]
                        xl:w-[85%]
                        2xl:w-[85%]
              "
            >
              <img
                src={rengoku}
                alt="channel banner"
                className="h-60 w-full rounded-3xl object-cover
                "
              />

              <div className="h-fit w-full flex">
                <img
                  src={rengoku}
                  alt="channel logo"
                  className="size-50 rounded-full p-2 object-cover
                  hidden
                  lg:block
                  xl:block
                  2xl:block
                  "
                />
                <div className=" p-2 flex flex-1 flex-col">
                  <h1 className="text-3xl font-bold flex justify-self-auto ">
                    Channel Name Channel Name Channel Name Channel Name &nbsp;
                    <i className="fas fa-check size-8 bg-blue-700 rounded-full p-2 text-sm text-white text-center"></i>
                  </h1>
                  <div className="flex gap-2 p-2">
                    <span className="text-gray-500">@channelID</span>
                    <span className="">1M subscribers</span>
                    <span className="text-gray-500">100 Videos</span>
                  </div>
                  <div className="w-full p-2 flex">
                    <div className="w-[70%] cursor-pointer line-clamp-1 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      ProvidentLorem ipsum dolor sit amet consectetur
                      adipisicing elit. Provident
                    </div>
                    ..more
                  </div>
                  <div>
                    <Link
                      to="https://www.youtube.com/"
                      className="text-blue-700"
                    >
                      Youtube
                    </Link>
                    <Link
                      to="https://www.youtube.com/"
                      className="text-blue-700"
                    >
                      Youtube
                    </Link>
                    and 2 more
                  </div>
                  <button className="w-fit bg-gray-200 hover:bg-gray-300 rounded-xl p-2  relative cursor-pointer group ">
                    <div className="flex gap-2 justify-center items-center">
                      <i className="fas fa-bell"></i>
                      personalized
                    </div>
                    <ul className=" w-40 bg-white rounded-xl p-2 shadow-2xl shadow-black/50 absolute top-10 hidden group-hover:block">
                      <li className="p-2 flex gap-2 justify-center items-center rounded-xl cursor-pointer hover:bg-gray-200">
                        {/* <i className="fa-solid fa-bell-ring"></i> */}
                        <img
                          src={ringBell}
                          alt=""
                          className="size-6 object-cover "
                        />
                        All
                      </li>
                      <li className="p-2 rounded-xl flex gap-2 justify-center items-center cursor-pointer hover:bg-gray-200">
                        <i className="fas fa-bell"></i>
                        personalized
                      </li>
                      <li className="p-2 rounded-xl flex gap-2 justify-center items-center cursor-pointer hover:bg-gray-200">
                        <i className="fas fa-bell-slash "></i>
                        None
                      </li>
                      <li className=" p-2 rounded-xl flex gap-2 justify-center items-center cursor-pointer hover:bg-gray-200">
                        <i className="fas fa-minus"></i>
                        <i className="fas fa-bell"></i>
                        Unsubscribe
                      </li>
                    </ul>
                  </button>
                </div>
              </div>
              <br />

              <nav className="h-fit w-full mb-1 ">
                <ul className="flex">
                  <li
                    onClick={() => {
                      setActiveComponent(1);
                    }}
                    className={`p-2 font-bold cursor-pointer hover:border-black hover:text-black m-2
                      ${
                        ActiveComponent == 1
                          ? "text-black border-b-2 border-black"
                          : "text-gray-600 border-b-2 border-transparent"
                      } `}
                  >
                    Home
                  </li>
                  <li
                    onClick={() => {
                      setActiveComponent(2);
                    }}
                    className={`p-2 font-bold cursor-pointer hover:border-black hover:text-black m-2 
                      ${
                        ActiveComponent == 2
                          ? "text-black border-b-2 border-black"
                          : "text-gray-600 border-b-2 border-transparent"
                      } `}
                  >
                    Video
                  </li>
                  <li
                    onClick={() => {
                      setActiveComponent(3);
                    }}
                    className={`p-2 font-bold cursor-pointer hover:border-black hover:text-black m-2 
                      ${
                        ActiveComponent == 3
                          ? "text-black border-b-2 border-black"
                          : "text-gray-600 border-b-2 border-transparent"
                      } `}
                  >
                    Shorts
                  </li>
                  <li
                    onClick={() => {
                      setActiveComponent(4);
                    }}
                    className={`p-2 font-bold cursor-pointer hover:border-black hover:text-black m-2
                      ${
                        ActiveComponent == 4
                          ? "text-black border-b-2 border-black"
                          : "text-gray-600 border-b-2 border-transparent"
                      } `}
                  >
                    Live
                  </li>
                  <li
                    onClick={() => {
                      setActiveComponent(5);
                    }}
                    className={`p-2 font-bold cursor-pointer hover:border-black hover:text-black m-2
                      ${
                        ActiveComponent == 5
                          ? "text-black border-b-2 border-black"
                          : "text-gray-600 border-b-2 border-transparent"
                      } `}
                  >
                    Playlists
                  </li>
                  <li
                    onClick={() => {
                      setActiveComponent(6);
                    }}
                    className={`p-2 font-bold cursor-pointer hover:border-black hover:text-black m-2
                      ${
                        ActiveComponent == 6
                          ? "text-black border-b-2 border-black"
                          : "text-gray-600 border-b-2 border-transparent"
                      } `}
                  >
                    Posts
                  </li>
                </ul>
              </nav>

              <hr />

              <div className=" flex-1">
                {ChannelOwnerComponents[ActiveComponent]}

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>

              {/* <h1>The Page of Youtuber You Subscribed</h1>
              <h1>Channel Owner Pager {params.id}</h1> */}
            </div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default ChannelOwner;
