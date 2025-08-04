import React from "react";
import FilmCard from "../../Components/FilmComponents/FilmCard";
import Context from "../../Context/Context";
import TopMenu from "../../Components/TopMenu/TopMenu";
import SideMenu from "../../Components/SideMenu/SideMenu";
import { useParams } from "react-router-dom";

function FilmViewAll() {
  const params = useParams();
  return (
    <>
      <Context>
        <TopMenu />
        <div className="flex-1 flex">
          <SideMenu />
          <div className=" h-screen flex-1 overflow-auto ">
            <h1 className=" p-2 text-4xl font-bold ">{params.category}</h1>
            <div className=" flex gap-2 justify-center items-center flex-wrap">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-fit w-60 p-2">
                  <FilmCard />
                </div>
              ))}
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </Context>
    </>
  );
}

export default FilmViewAll;
