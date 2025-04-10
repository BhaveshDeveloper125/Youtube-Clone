import React from 'react';
import TopMenu from '../../Components/TopMenu/TopMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import Context from '../../Context/Context';
import ShortsVideo from '../../Components/ShortsVideo/ShortsVideo';

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
          <div className="flex flex-1 justify-center items-center">
            <div className="h-screen w-1/3  overflow-auto">
              <ShortsVideo v={a} />
              <ShortsVideo v={b} />
              <ShortsVideo v={c} />
              <ShortsVideo v={d} />
              <ShortsVideo v={e} />
            </div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default Shorts;
