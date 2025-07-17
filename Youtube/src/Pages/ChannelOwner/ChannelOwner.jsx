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
  const [channelData, setchannelData] = useState(false);

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
                    <span
                      onClick={() => {
                        setchannelData(!channelData);
                      }}
                      className="cursor-pointer"
                    >
                      ..more
                    </span>
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
                    </Link>{" "}
                    &nbsp;{" "}
                    <button
                      onClick={() => setchannelData(!channelData)}
                      className="cursor-pointer"
                    >
                      and 2 more
                    </button>
                    <div
                      className={`h-screen w-screen bg-black/50 justify-center items-center absolute top-0 left-0 z-10 ${
                        channelData ? `flex` : "hidden"
                      } `}
                    >
                      <div className="h-150 w-[50%] bg-white relative overflow-auto">
                        <button
                          onClick={() => setchannelData(!channelData)}
                          className="w-full bg-white p-2 text-2xl text-black flex justify-between  sticky top-0 cursor-pointer"
                        >
                          <span className="h-10 w-[90%] line-clamp-1">
                            Channel Name Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Ipsam accusamus cumque facilis.
                            Natus, minima ipsum unde molestias inventore eveniet
                            a sed suscipit mollitia. Reiciendis porro vero qui,
                            error nobis ipsa?
                          </span>
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                        <h1 className="font-bold text-4xl p-4">Description</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio neque accusantium voluptate ut dignissimos
                        odit? Iusto quas repudiandae, asperiores ullam
                        laboriosam enim impedit minima suscipit, nihil delectus
                        itaque nulla accusamus. Consectetur et perspiciatis
                        inventore vitae adipisci eveniet quis obcaecati odit
                        voluptas voluptatum non ex, incidunt illum aspernatur
                        officiis, ipsa quia accusamus suscipit, omnis aliquam
                        <h1 className="text-2xl font-bold p-8">Links</h1>
                        <div className="h-fit w-full p-4 ">
                          <ul className="size-full">
                            {(() => {
                              const item = [];
                              for (let i = 0; i <= 4; i++) {
                                item.push(
                                  <li key={i} className="size-full p-2 flex">
                                    <img
                                      src={rengoku}
                                      alt="link-icon"
                                      className="size-10  object-cover"
                                    />
                                    <div className="flex flex-col flex-1">
                                      <span className="flex-1 pl-2 pr-2">
                                        Instagram
                                      </span>
                                      <span className="flex-1 pl-2 pr-2">
                                        <Link className="w-full line-clamp-1">
                                          http:// Lorem ipsum dolor sit amet
                                          consectetur adipisicing elit.
                                          Blanditiis saepe unde quasi ex rerum!
                                          Amet, totam! Velit adipisci
                                          exercitationem molestiae sint,
                                          deleniti provident incidunt tempore
                                          unde cum cupiditate porro aut.
                                        </Link>
                                      </span>
                                    </div>
                                  </li>
                                );
                              }
                              return item;
                            })()}
                          </ul>
                        </div>
                        <h1 className="text-2xl font-bold p-8">More Info</h1>
                        <ul className="flex-1 p-2">
                          <li className="w-full p-2 flex gap-4">
                            <i className=" fa-solid fa-envelope-open h-full justify-center items-center"></i>
                            <span>bhavesh2103m@gmail.com adipisicing</span>
                          </li>
                          <li className="w-full p-2 flex gap-4">
                            <i className="fas fa-globe text-xl"></i>
                            <span>
                              http:// Lorem ipsum dolor sit, amet consectetur
                              adipisicing
                            </span>
                          </li>
                          <li className="w-full p-2 flex gap-4">
                            <i className="fa-solid fa-circle-exclamation text-xl"></i>
                            <span>joined 1 january 2025</span>
                          </li>
                          <li className="w-full p-2 flex gap-4">
                            <i className="fa-solid fa-user text-xl"></i>
                            <span>1000000 Subscribers</span>
                          </li>
                          <li className="w-full p-2 flex gap-4">
                            <i className=" fab fa-youtube h-full justify-center items-center"></i>
                            <span>100 Videos</span>
                          </li>
                          <li className="w-full p-2 flex gap-4">
                            <i className="fas fa-arrow-trend-up h-full justify-center items-center"></i>
                            <span>1000000 Views</span>
                          </li>
                          <li className="w-full  p-2 flex gap-4">
                            <span className="bg-gray-200 hover:bg-gray-300 rounded-2xl p-3 flex gap-2 justify-center items-center cursor-pointer">
                              <i className="fas fa-flag h-full justify-center items-center"></i>
                              Report User
                            </span>
                            <span
                              onClick={() => {
                                navigator.clipboard.writeText(
                                  window.location.href
                                );
                              }}
                              tabIndex={0}
                              className="bg-gray-200 hover:bg-gray-300 focus:bg-gray-100 rounded-2xl p-3 flex gap-2 justify-center items-center cursor-pointer"
                            >
                              <i className="fas fa-share h-full justify-center items-center"></i>
                              copy channel link
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <button className="w-fit bg-gray-200 hover:bg-gray-300 rounded-xl p-2  relative cursor-pointer group z-0 ">
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
