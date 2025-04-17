import React from 'react';
import TopMenu from '../../Components/TopMenu/TopMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import Context from '../../Context/Context';
import ShortsVideo from '../../Components/ShortsVideo/ShortsVideo';

// Importing Icons
import arrow from '../../assets/Icons/up_arrow.svg';

// Importing Videos
import a from '../../assets/Videos/s1.mp4';
import b from '../../assets/Videos/s2.mp4';
import c from '../../assets/Videos/s3.mp4';
import d from '../../assets/Videos/s4.mp4';
import e from '../../assets/Videos/s5.mp4';

function Shorts() {
  return (
    <>
      <Context>
        <TopMenu />
        <div className="flex">
          <SideMenu />
          <div className="flex flex-1   justify-center items-center">
            <div className="h-screen w-1/3   overflow-auto">
              <ShortsVideo v={a} />
              <ShortsVideo v={b} />
              <ShortsVideo v={c} />
              <ShortsVideo v={d} />
              <ShortsVideo v={e} />
            </div>
            <div className="flex  flex-col ">
              <button className="bg-gray-100 cursor-pointer rounded-full p-2 hover:bg-gray-200 active:bg-gray-300">
                <img src={arrow} alt="up" className="size-8" />
              </button>
              <br />
              <button className="bg-gray-100 cursor-pointer rounded-full p-2 hover:bg-gray-200 active:bg-gray-300">
                <img src={arrow} alt="up" className="size-8 rotate-180" />
              </button>
            </div>

            <div className="size-50 p-1 bg-red-500"></div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default Shorts;
