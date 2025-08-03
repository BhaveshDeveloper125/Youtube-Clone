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
            className="h-full w-full rounded-xl object-cover"
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
      </Link>
    </>
  );
}

export default FilmCard;
