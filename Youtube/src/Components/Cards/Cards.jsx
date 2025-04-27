import React, { useState } from 'react';
import goku from '../../assets/Images/5.jpg';
import checkmark from '../../assets/Icons/checked.svg';

function Cards() {
  const [showbar, setshowbar] = useState(false);
  let subcard = 'absolute  bg-white rounded-sm';
  let subcardstyle = 'text-center hover:bg-gray-200 p-2';

  return (
    <>
      {/* <div className="h-[50%] w-1/4  p-2 mt-4 mb-4 rounded-lg cursor-pointer hover:bg-gray-200 active:bg-gray-300">
        <img src={goku} alt="thumb nail image" className="rounded-lg" />
        <div className="h-[20%] w-full mt-2 flex ">
          <img src={goku} className=" size-14 object-cover rounded-full" />
          <h1 className="flex-1 truncate p-2 text-justify font-semibold">
            This is the vide TitleThis is the vide TitleThis is the vide
            TitleThis is the vide TitleThis is the vide TitleThis is the vide
            TitleThis is the vide TitleThis is the vide TitleThis is the vide
            TitleThis is the vide Title
          </h1>

          <span className={`relative ${showbar ? ' w-[80%]' : 'hidden'}`}>
            <div
              className={`absolute bg-white rounded-sm ${
                showbar ? 'block ' : 'hidden'
              } right-4`}
            >
              <ul className="">
                <li className={subcardstyle}>Add to queue</li>
                <li className={subcardstyle}>Save to watch Later</li>
                <li className={subcardstyle}>Save ti Playlist</li>
                <li className={subcardstyle}>Download</li>
                <li className={subcardstyle}>Sahre</li>
                <hr />
                <li className={subcardstyle}>Not interested</li>
                <li className={subcardstyle}>Dont Recommend This Channel</li>
                <li className={subcardstyle}>Report</li>
              </ul>
            </div>
          </span>

          <div
            onClick={() => setshowbar(!showbar)}
            className="h-fit w-fit rounded-full flex flex-col justify-center items-center gap-2 p-1 hover:bg-gray-400 active:bg-gray-500"
          >
            <div className="min-h-1 min-w-1 bg-black rounded-full"></div>
            <div className="min-h-1 min-w-1 bg-black rounded-full"></div>
            <div className="min-h-1 min-w-1 bg-black rounded-full"></div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex-1  text-gray-400 truncate">
            The Valley Of MusicThe Valley Of MusicThe Valley Of Music
          </div>
          <div className="flex-1 text-gray-400">1M views : 1 month ago</div>
        </div>
      </div> */}

      <div className="h-100 w-121  rounded-xl p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-300">
        <div className="h-70 w-full  rounded-xl">
          <img
            src={goku}
            alt="thumbnail"
            className=" object-cover rounded-xl"
          />
        </div>
        <div className="flex felx-1 bg-green-500 rounded-xl">
          <span className="size-20 bg-red-500 p-1"></span>
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default Cards;
