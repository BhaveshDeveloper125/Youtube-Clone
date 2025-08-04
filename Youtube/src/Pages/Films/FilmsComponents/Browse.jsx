import React from "react";
import { Link } from "react-router-dom";
import FilmCard from "../../../Components/FilmComponents/FilmCard";

function Browse() {
  return (
    <>
      <div className="flex-1 ">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="">
            <div className="w-full p-4 flex justify-between">
              <div>
                <h1 className="text-2xl font-bold">Premium Movies For you</h1>
              </div>
              <div>
                <Link className="hover:bg-blue-500/20 rounded-2xl p-2 text-blue-500 font-semibold">
                  view all
                </Link>
              </div>
            </div>
            <div className="h-fit w-[99%] flex gap-2 p-2 overflow-x-auto ">
              {[...Array(10)].map((_, i) => (
                <div className="h-fit min-w-60">
                  <FilmCard key={i} />
                </div>
              ))}
            </div>
            <br />
            <hr className="border border-gray-300" />
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default Browse;
