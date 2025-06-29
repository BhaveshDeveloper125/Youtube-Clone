import React from "react";
import Context from "../../Context/Context";
import TopMenu from "../../Components/TopMenu/TopMenu";
import SideMenu from "../../Components/SideMenu/SideMenu";
import WatchLaterVideo from "../../Components/WatchLaterVideo/WatchLaterVideo";
import { Link } from "react-router-dom";

// import images
import cutie from "../../assets/Images/cute.jpg";

// Import Css File

function LikedVideos() {
  return (
    <>
      <Context>
        <TopMenu />
        <div className="h-full w-full flex overflow-auto">
          <SideMenu />
          <div
            id="likedvideo_container"
            className=" h-screen flex flex-1 lg:overflow-auto "
          >
            <div
              id="likedvideo_left_container"
              className="h-full lg:w-[30%] bg-[url('assets/Images/cute.jpg')] bg-cover bg-center flex justify-center relative
              md:flex-col md:w-[100%]
              lg:sticky lg:top-0
              xl:sticky xl:top-0
              2xl:sticky 2xl:top-0
              "
            >
              <div className="h-full w-full p-4 backdrop-blur-2xl">
                <Link className="h-60 w-full rounded-xl relative backdrop-blur-2xl group">
                  <img
                    src={cutie}
                    alt=""
                    className="h-60 w-full rounded-xl object-cover backdrop-blur-2xl"
                  />
                  <div className="size-full bg-black/50 rounded-xl p-2 text-white hidden group-hover:flex gap-2 justify-center items-center absolute top-0 left-0   ">
                    <i className="fas fa-play"></i>
                    <span>Play all</span>
                  </div>
                </Link>
                <h1 className="p-6 text-white text-2xl font-bold ">
                  Liked Videos
                </h1>
                <h1 className="p-6 text-white text-lg">Bhavesh Jadav</h1>
                <span className="pl-6 text-white ">
                  20 videos Updated today
                </span>
                <br />
                <br />

                <div className="h-fit w-full relative flex justify-center ">
                  <button className=" size-8 bg-white/20 hover:bg-white/10 rounded-full flex gap-1 flex-col justify-center items-center cursor-pointer group">
                    <div className="size-[4px] bg-white rounded-full"></div>
                    <div className="size-[4px] bg-white rounded-full"></div>
                    <div className="size-[4px] bg-white rounded-full"></div>

                    <div className="h-fit w-60 absolute top-8 left-8 hidden group-hover:block">
                      <ul className="size-full bg-white rounded-2xl">
                        <li className=" hover:bg-black/10 rounded-xl flex gap-2 justify-center items-center p-2">
                          <i className="fa-regular fa-plus text-3xl"></i>
                          <span>Add Videos</span>
                        </li>
                        <li className=" hover:bg-black/10 rounded-xl flex gap-2 justify-center items-center p-2">
                          <i className="fa-solid fa-minus text-3xl"></i>
                          <span>Remove Videos</span>
                        </li>
                      </ul>
                    </div>
                  </button>
                </div>

                <br />

                <div className="h-fit w-full p-4  flex gap-2  ">
                  <Link className="w-40 bg-white rounded-full text-black p-2 flex gap-2 justify-center items-center">
                    <i className="fas fa-play"></i> <span>Play all</span>
                  </Link>
                  <Link className="w-40 bg-white rounded-full text-black p-2 flex gap-2 justify-center items-center">
                    <i className="fa-solid fa-shuffle"></i> <span>Shuffle</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-screen w-[100%] p-1">
              <WatchLaterVideo
                img={cutie}
                title="video title this is the video title this is the video title  this is the video titlethis is the video titlethis is the video titlethis is the video title"
                channelName="Channel Name Channel Name Channel Name Channel Name "
                views="1M"
                time="1 year"
              />
              <WatchLaterVideo
                img={cutie}
                title="video title this is the video title this is the video title  this is the video titlethis is the video titlethis is the video titlethis is the video title"
                channelName="Channel Name Channel Name Channel Name Channel Name "
                views="1M"
                time="1 year"
              />
              <WatchLaterVideo
                img={cutie}
                title="video title this is the video title this is the video title  this is the video titlethis is the video titlethis is the video titlethis is the video title"
                channelName="Channel Name Channel Name Channel Name Channel Name "
                views="1M"
                time="1 year"
              />
              <WatchLaterVideo
                img={cutie}
                title="video title this is the video title this is the video title  this is the video titlethis is the video titlethis is the video titlethis is the video title"
                channelName="Channel Name Channel Name Channel Name Channel Name "
                views="1M"
                time="1 year"
              />
              <WatchLaterVideo
                img={cutie}
                title="video title this is the video title this is the video title  this is the video titlethis is the video titlethis is the video titlethis is the video title"
                channelName="Channel Name Channel Name Channel Name Channel Name "
                views="1M"
                time="1 year"
              />
              <WatchLaterVideo
                img={cutie}
                title="video title this is the video title this is the video title  this is the video titlethis is the video titlethis is the video titlethis is the video title"
                channelName="Channel Name Channel Name Channel Name Channel Name "
                views="1M"
                time="1 year"
              />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default LikedVideos;
