import React from "react";
import goku from "../../assets/Images/5.jpg";

function FilmCard() {
  return (
    <>
      <div className="h-80 w-full">
        <div className="h-full w-full relative">
          <img
            src={goku}
            alt="thumbnail"
            className="h-full w-full rounded-xl object-cover"
          />
          <span className="bg-black/50 rounded-[8px] p-1 m-2 text-white absolute bottom-0 right-0">
            3:00:00
          </span>
          <div className=" h-fit hover:w-40 bg-black/40 hover:bg-black/80 flex justify-end p-2 m-1 absolute top-0 right-0 group">
            <span className="justify-start text-white transition transform text-sm p-0.5 hidden group-hover:flex">
              Add to Watch Later
            </span>
            <i className="fas fa-clock invert"></i>
          </div>
          <div className=" h-fit hover:w-40 bg-black/40 hover:bg-black/80 flex justify-end p-2 m-1 absolute top-10 right-0 group">
            <span className="justify-start text-white transition transform text-sm p-0.5 hidden group-hover:flex">
              Add to Watch Later
            </span>
            <i className="fas fa-clock invert"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilmCard;
