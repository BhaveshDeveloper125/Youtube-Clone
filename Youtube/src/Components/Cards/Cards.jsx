import React, { useEffect, useRef, useState } from "react";
import goku from "../../assets/Images/5.jpg";
import checkmark from "../../assets/Icons/checked.svg";
import { Link } from "react-router-dom";

function Cards() {
  const [showbar, setshowbar] = useState(false);
  let subcard = "absolute  bg-white rounded-sm";
  let subcardstyle = "text-center hover:bg-gray-200 p-2";

  return (
    <>
      <Link className="size-full hover:bg-gray-200 active:bg-gray-300 rounded-xl p-2 mb-14 flex flex-col justify-center items-center relative cursor-pointer ">
        <img
          src={goku}
          alt="thumbnail"
          className="h-[70%] w-full rounded-xl object-cover"
        />
        <div className="h-[30%] w-full p-2 flex ">
          <img
            src={goku}
            alt="channel logo"
            className="size-10 rounded-full object-cover"
          />
          <div className="h-fit flex flex-1 ">
            <div className="h-fit w-[95%] flex flex-col ">
              <h1 className="h-fit w-full p-1 font-bold line-clamp-2">
                Vide title Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quae numquam asperiores neque esse non doloremque nulla
                dolore et exercitationem dolores animi, incidunt voluptates
                perspiciatis nostrum ipsa, iure expedita cum quia!
              </h1>

              <div className="h-fit w-full flex justify-center items-center ">
                <p className="w-[90%] line-clamp-1">
                  Channel name Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Vitae nostrum tenetur sequi eum, officia
                  nisi exercitationem fugiat laboriosam doloremque sint quae
                  consequatur error quibusdam in perferendis, iure, magnam
                  beatae praesentium.
                </p>
                <i className="fas fa-check size-4 bg-gray-400 text-white text-center text-md rounded-full"></i>
              </div>
              <div>1M views : 1 hour ago</div>
            </div>
            <div className=" w-[5%] flex flex-col gap-1 justify-center items-center">
              <button
                onClick={() => setshowbar(!showbar)}
                className="w-full rounded-xl p-1 flex flex-col gap-1 justify-center items-center cursor-pointer group hover:bg-gray-100"
              >
                <div className="size-[4px] bg-black rounded-full"></div>
                <div className="size-[4px] bg-black rounded-full"></div>
                <div className="size-[4px] bg-black rounded-full"></div>
                {showbar ? (
                  <ul className=" w-[60%] bg-white rounded-xl mr-8 absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl shadow-black/10 ">
                    <li className={subcardstyle}>Add to queue</li>
                    <li className={subcardstyle}>Save to watch Later</li>
                    <li className={subcardstyle}>Save to Playlist</li>
                    <li className={subcardstyle}>Download</li>
                    <li className={subcardstyle}>Sahre</li>
                    <hr />
                    <li className={subcardstyle}>Not interested</li>
                    <li className={subcardstyle}>
                      Dont Recommend This Channel
                    </li>
                    <li className={subcardstyle}>Report</li>
                  </ul>
                ) : null}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Cards;
