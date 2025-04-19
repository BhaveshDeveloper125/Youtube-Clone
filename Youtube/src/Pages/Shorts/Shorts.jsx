import React, { useState } from 'react';
import TopMenu from '../../Components/TopMenu/TopMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import Context from '../../Context/Context';
import ShortsVideo from '../../Components/ShortsVideo/ShortsVideo';
import Comments from '../../Components/Comments/Comments';

// Importing Icons
import arrow from '../../assets/Icons/up_arrow.svg';
import cross from '../../assets/Icons/close.svg';
import sorting from '../../assets/Icons/sort.svg';

// Importing Videos
import a from '../../assets/Videos/s1.mp4';
import b from '../../assets/Videos/s2.mp4';
import c from '../../assets/Videos/s3.mp4';
import d from '../../assets/Videos/s4.mp4';
import e from '../../assets/Videos/s5.mp4';

function Shorts() {
  const [shortsMenu, setshortsMenu] = useState(false);
  const [comment, setcomment] = useState(false);
  const [sortcomment, setsortcomment] = useState(false);

  // let sorting_comment =
  //   'p-4 rounded-2xl text-center font-bold hover:bg-gray-200';

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
                  ? 'h-150 w-100 border border-black rounded-2xl overflow-auto p-1 transition duration-1000 '
                  : ' hidden w-0 transition duration-1000'
              }
            >
              <div className="h-10 w-full flex  ">
                <h1 className="text-xl font-bold  p-2">comments</h1>
                <h1 className=" p-2">100</h1>
                <div className="flex flex-1 p-1"></div>

                <div className="w-20 flex flex-col  p-2 justify-center items-center relative cursor-pointer ">
                  <img
                    src={sorting}
                    alt="sort"
                    onClick={() => setsortcomment(!sortcomment)}
                    className="h-8 p-2 rounded-md flex justify-center items-center
                     active:bg-gray-200"
                  />
                  <div
                    className={
                      sortcomment
                        ? 'h-fit w-40 border border-gray-200 rounded-2xl p-1 absolute top-10 right-8 '
                        : 'hidden'
                    }
                  >
                    <ul className="size-full">
                      <li className="h-[50%] w-full bg-gray-300 rounded-xl p-2 text-center hover:bg-gray-100">
                        Top Comments
                      </li>
                      <li className="h-[50%] w-full rounded-xl p-2 text-center hover:bg-gray-100">
                        Newest First
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => setcomment(!comment)}
                  className="cursor-pointer"
                >
                  <img src={cross} alt="close" className="size-6" />
                </button>
              </div>
              <hr />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
            </div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default Shorts;
