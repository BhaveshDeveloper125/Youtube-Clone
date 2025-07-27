import React, { useState } from "react";
import SideMenu from "../../Components/SideMenu/SideMenu";
import TopMenu from "../../Components/TopMenu/TopMenu";
import Context from "../../Context/Context";
import NowTrending from "../../Components/TrendingComponents/NowTrending";
import MusicTrending from "../../Components/TrendingComponents/MusicTrending";
import FilmTrending from "../../Components/TrendingComponents/FilmTrending";
import SportsTrending from "../../Components/TrendingComponents/SportsTrending";

// import gifs
import fire from "../../assets/Gif/fire.gif";

function Trending() {
  const [trendingsection, settrendingsection] = useState(0);
  const trendingsections = {
    0: <NowTrending />,
    1: <MusicTrending />,
    2: <FilmTrending />,
    3: <SportsTrending />,
  };
  let menustyle =
    "p-2 text-xl font-semibold hover:text-black border-2 border-t-transparent border-l-transparent border-r-transparent border-b-transparent outline-none hover:border-b-black text-gray-400 cursor-pointer";

  let clickedmenustyle =
    "p-2 text-xl font-semibold text-black border-2 border-t-transparent border-l-transparent border-r-transparent outline-none cursor-pointer";
  return (
    <>
      <Context>
        <TopMenu />
        <div className="flex">
          <SideMenu />
          <div className="h-screen flex-1 overflow-auto mx-auto px-16">
            <div className="h-fit w-full flex gap-2 items-center ">
              <img
                src={fire}
                alt="trending-icon"
                className="size-18 border-red-600 rounded-full rotate-20 mix-blend-multiply"
              />
              <h1 className="text-4xl font-bold">Trending</h1>
            </div>
            <ul className="p-4 flex gap-16 hover:">
              <li
                onClick={() => settrendingsection(0)}
                className={trendingsection == 0 ? clickedmenustyle : menustyle}
              >
                Now
              </li>
              <li
                onClick={() => settrendingsection(1)}
                className={trendingsection == 1 ? clickedmenustyle : menustyle}
              >
                Music
              </li>
              <li
                onClick={() => settrendingsection(2)}
                className={trendingsection == 2 ? clickedmenustyle : menustyle}
              >
                Sports
              </li>
              <li
                onClick={() => settrendingsection(3)}
                className={trendingsection == 3 ? clickedmenustyle : menustyle}
              >
                Film
              </li>
            </ul>
            <div className="flex-1">{trendingsections[trendingsection]}</div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default Trending;
