import React, { useEffect, useRef, useState } from 'react';
import goku from '../../assets/Images/5.jpg';
import checkmark from '../../assets/Icons/checked.svg';
import { Link } from 'react-router-dom';

function Cards() {
  const [showbar, setshowbar] = useState(false);
  let subcard = 'absolute  bg-white rounded-sm';
  let subcardstyle = 'text-center hover:bg-gray-200 p-2';

  return (
    <>
      <Link className="h-100 w-121  rounded-xl p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-300">
        <div className="h-70 w-full  rounded-xl">
          <img
            src={goku}
            alt="thumbnail"
            className=" object-cover rounded-xl"
          />
        </div>
        <div className="flex felx-1 rounded-xl">
          <span className="size-15 p-1">
            <img
              src={goku}
              alt="icon"
              className="size-10 rounded-full object-cover"
            />
          </span>
          <div className="flex flex-col flex-1 p-1">
            <h1 className=" h-fit w-98 font-bold truncate">
              VIDEO TITLE : Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Error aliquid aliquam cupiditate, nobis corporis culpa
              minima officia exercitationem reprehenderit mollitia, vel eaque
              excepturi iure commodi doloribus fugiat illum! Officia, doloribus.
            </h1>
            <span
              className={`relative ${
                showbar ? ' w-[80%] left-22 z-50' : 'hidden'
              }`}
            >
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
            <span className="flex">
              <h1 className="h-fit w-90 text-gray-400 truncate">
                Channel Name : Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quam doloribus omnis vero illum maxime
                molestiae amet aperiam esse assumenda animi. Expedita mollitia
                consectetur illum ad dignissimos tenetur placeat alias.
                Eligendi.
              </h1>
              <img
                src={checkmark}
                alt=""
                className="size-3 rounded-full object-cover opacity-50 relative top-2 left-2 z-0"
              />
            </span>
            <span className="flex">
              <h1 className="h-fit w-90 text-gray-400 truncate">
                1M views . 1 day ago
              </h1>
            </span>
          </div>

          <span
            onClick={() => setshowbar(!showbar)}
            className="h-10 w-1 rounded-xl p-2 flex flex-col justify-around items-center gap-1 hover:bg-gray-100 active:bg-gray-400"
          >
            <div className="size-0.5 bg-black rounded-full p-0.5"></div>
            <div className="size-0.5 bg-black rounded-full p-0.5"></div>
            <div className="size-0.5 bg-black rounded-full p-0.5"></div>
          </span>
        </div>
      </Link>
    </>
  );
}

export default Cards;
