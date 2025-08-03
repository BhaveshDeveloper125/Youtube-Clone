import React from "react";
import Context from "../../../Context/Context";
import TopMenu from "../../../Components/TopMenu/TopMenu";
import SideMenu from "../../../Components/SideMenu/SideMenu";
import FilmCard from "../../../Components/FilmComponents/FilmCard";

function Purchase() {
  return (
    <>
      <div className=" p-4 flex justify-center items-center flex-wrap">
        {[...Array(10)].map((_, i) => (
          <div className="h-80 w-60 p-2">
            <FilmCard key={i} />
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default Purchase;
