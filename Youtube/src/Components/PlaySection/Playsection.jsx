import React from "react";
import { Link } from "react-router-dom";

// import images
import goku from "../../assets/Images/5.jpg";

function Playsection(prop) {
  return (
    <Link className="h-fit w-full rounded-xl p-2 flex flex-col items-center shadow-2xl shadow-black/50 transform translate-y-0 transition duration-300  hover:-translate-y-1 ">
      <div className="h-fit w-full flex flex-col items-center relative">
        <img
          src={prop.img}
          alt=""
          className="h-2 w-[80%] rounded-t-xl  object-cover blur-[2.5px] "
        />
        <img
          src={prop.img}
          alt=""
          className="h-2 w-[90%] rounded-t-xl  object-cover blur-[2.5px] "
        />
        <img
          src={prop.img}
          alt=""
          className="h-50 w-full rounded-xl  object-cover"
        />
        <span className="bg-black rounded-md text-white absolute bottom-1 right-2">
          <i className="fas fa-list p-2"></i>
          <span>10 videos</span>
        </span>
      </div>
      <div className="h-fit w-full p-1 mt-2 ">
        <h1 className="line-clamp-2">{prop.title}</h1>
        <div className="flex">
          <h1 className="w-[50%] truncate text-center p-2">
            {prop.channelName}
          </h1>
          <h1 className="w-[50%] text-center p-2">playlist</h1>
        </div>
        <Link href="">view full playlist</Link>
      </div>
    </Link>
  );
}

export default Playsection;
