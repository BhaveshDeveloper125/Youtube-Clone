import React from "react";
import Context from "../../../Context/Context";
import TopMenu from "../../../Components/TopMenu/TopMenu";
import SideMenu from "../../../Components/SideMenu/SideMenu";
import FilmCard from "../../../Components/FilmComponents/FilmCard";

function Purchase() {
  return (
    <>
      <div className=" flex gap-2 justify-center items-center flex-wrap">
        {[...Array(10)].map((_, i) => (
          <div className="h-fit w-60 p-2">
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
