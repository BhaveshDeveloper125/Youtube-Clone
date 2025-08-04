import React from "react";
import { Link } from "react-router-dom";

// Import Images
import goku from "../../assets/Images/5.jpg";

function FilmCard() {
  return (
    <>
      <Link className="h-full w-full group">
        <div className="h-full w-full relative">
          <img
            src={goku}
            alt="thumbnail"
            className="h-80 w-full rounded-xl object-cover"
          />
          <span className="bg-black/50 rounded-[8px] p-1 m-2 text-white absolute bottom-0 right-0">
            3:00:00
          </span>

          <div className=" h-fit bg-black/40 hover:bg-black/80 hidden group-hover:flex gap-2 justify-center items-center p-2 m-1 absolute top-0 right-0 cursor-pointer group/items">
            <span className="hidden group-hover/items:flex justify-start text-white transition transform text-sm p-0.5">
              Add to Watch Later
            </span>
            <i className="fas fa-clock invert "></i>
          </div>
          <div className=" h-fit bg-black/40 hover:bg-black/80 hidden group-hover:flex gap-2 justify-center items-center p-2 m-1 absolute top-10 right-0 cursor-pointer group/items">
            <span className="hidden group-hover/items:flex justify-start text-white transition transform text-sm p-0.5">
              Add to queue
            </span>
            <i className="fas fa-bars-progress invert"></i>
          </div>
        </div>
        <div className=" w-full p-1 font-semibold line-clamp-1 ">
          Movie Title Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Hic facere in ullam debitis quod nostrum iusto mollitia voluptates
          neque! At ipsum quae ipsa laudantium distinctio soluta dolores dolorem
          sapiente magnam?
        </div>
        <div className=" w-full p-1 line-clamp-1 text-gray-400">
          type:Action and adventure Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perferendis sit nesciunt esse, error dicta placeat,
          praesentium exercitationem quaerat ducimus amet molestias aliquam,
          accusamus at soluta minus harum omnis pariatur officia.
        </div>
        <div className=" w-full p-1 flex gap-2 justify-start">
          <span className="bg-gray-100 pt-0.5 pb-0.5 pl-2 pr-2 text-green-500 text-center">
            Buy
          </span>
          <span className=" w-full p-1 font-semibold ">U/A</span>
        </div>
      </Link>
    </>
  );
}

export default FilmCard;
