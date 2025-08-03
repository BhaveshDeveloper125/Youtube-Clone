import React, { useState } from "react";
import Context from "../../Context/Context";
import TopMenu from "../../Components/TopMenu/TopMenu";
import SideMenu from "../../Components/SideMenu/SideMenu";
import Browse from "./FilmsComponents/Browse";
import Purchase from "./FilmsComponents/Purchase";

// Import Icons
import movie from "../../assets/Gif/cinema.gif";

function Films() {
  const [movies, setmovies] = useState(0);

  let menustyle =
    "p-2 text-xl font-semibold hover:text-black border-2 border-t-transparent border-l-transparent border-r-transparent border-b-transparent outline-none hover:border-b-black text-gray-400 cursor-pointer";

  let clickedmenustyle =
    "p-2 text-xl font-semibold text-black border-2 border-t-transparent border-l-transparent border-r-transparent outline-none cursor-pointer";

  const FilmsComponents = {
    0: <Browse />,
    1: <Purchase />,
  };

  return (
    <>
      <Context>
        <TopMenu />
        <div className="flex">
          <SideMenu />
          <div className="h-screen flex-1 overflow-auto mx-auto px-16 ">
            <div className="h-fit w-full p-16 flex gap-2 items-center ">
              <img
                src={movie}
                alt="movie-icon"
                className="size-18 object-cover "
              />
              <h1 className="text-4xl font-bold">Films</h1>
            </div>
            <ul className="w-full border-b-gray-400 flex gap-8 ">
              <li
                onClick={() => setmovies(0)}
                className={movies == 0 ? clickedmenustyle : menustyle}
              >
                Browse
              </li>
              <li
                onClick={() => setmovies(1)}
                className={movies == 1 ? clickedmenustyle : menustyle}
              >
                Purchase
              </li>
            </ul>
            {FilmsComponents[movies]}
          </div>
        </div>
      </Context>
    </>
  );
}

export default Films;
