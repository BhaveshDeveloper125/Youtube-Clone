import React from "react";
import Context from "../../Context/Context";
import TopMenu from "../../Components/TopMenu/TopMenu";
import SideMenu from "../../Components/SideMenu/SideMenu";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Import Components
import HomeSectionOfChannelOwner from "../../Components/ChannelOwnerComponents/HomeSectionOfChannelOwner";

// Import Icons
import ringBell from "../../assets/Icons/ring bell.svg";

// import Images
import rengoku from "../../assets/Images/rengoku.jpg";

function ChannelOwner() {
  const params = useParams();
  return (
    <>
      <Context>
        <TopMenu />
        <div className="flex">
          <SideMenu />
          <div className="flex justify-center items-center flex-1">
            <div className="h-screen w-[85%]  ">
              <img
                src={rengoku}
                alt="channel banner"
                className="h-60 w-full rounded-3xl object-cover"
              />

              <div className="h-fit w-full flex">
                <img
                  src={rengoku}
                  alt="channel logo"
                  className="size-50 rounded-full p-2 object-cover"
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
                  <button className="w-fit bg-white rounded-xl p-2 shadow-2xl shadow-black/50 relative group ">
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
                        <i class="fas fa-bell"></i>
                        Unsubscribe
                      </li>
                    </ul>
                  </button>
                </div>
              </div>

              <h1>Bhavesh</h1>

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
