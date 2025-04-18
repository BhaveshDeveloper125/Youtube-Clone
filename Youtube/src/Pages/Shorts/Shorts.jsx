import React, { useState } from 'react';
import TopMenu from '../../Components/TopMenu/TopMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import Context from '../../Context/Context';
import ShortsVideo from '../../Components/ShortsVideo/ShortsVideo';

// Importing Icons
import arrow from '../../assets/Icons/up_arrow.svg';
import cross from '../../assets/Icons/close.svg';

// Importing Videos
import a from '../../assets/Videos/s1.mp4';
import b from '../../assets/Videos/s2.mp4';
import c from '../../assets/Videos/s3.mp4';
import d from '../../assets/Videos/s4.mp4';
import e from '../../assets/Videos/s5.mp4';

function Shorts() {
  const [shortsMenu, setshortsMenu] = useState(false);
  const [comment, setcomment] = useState(false);
  return (
    <>
      <Context>
        <TopMenu />
        <div className="flex">
          <SideMenu />
          <div className="flex flex-1   justify-center items-center">
            <div className="h-screen w-1/3  overflow-auto">
              <ShortsVideo
                v={a}
                shortsMenu={shortsMenu}
                setshortsMenu={setshortsMenu}
                comment={comment}
                setcomment={setcomment}
              />
              <ShortsVideo
                v={b}
                shortsMenu={shortsMenu}
                setshortsMenu={setshortsMenu}
                comment={comment}
                setcomment={setcomment}
              />
              <ShortsVideo
                v={c}
                shortsMenu={shortsMenu}
                setshortsMenu={setshortsMenu}
                comment={comment}
                setcomment={setcomment}
              />
              <ShortsVideo
                v={d}
                shortsMenu={shortsMenu}
                setshortsMenu={setshortsMenu}
                comment={comment}
                setcomment={setcomment}
              />
              <ShortsVideo
                v={e}
                shortsMenu={shortsMenu}
                setshortsMenu={setshortsMenu}
                comment={comment}
                setcomment={setcomment}
              />
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
            <div
              className={
                comment
                  ? 'h-150 w-100 bg-green-500 p-1 transition duration-1000 '
                  : ' hidden w-0 transition duration-1000'
              }
            >
              <div className="h-10 w-full bg-red-500 flex  ">
                <h1>comments</h1>
                <button onClick={() => setcomment(!comment)}>
                  <img src={cross} alt="close" className="size-10" />
                </button>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default Shorts;
