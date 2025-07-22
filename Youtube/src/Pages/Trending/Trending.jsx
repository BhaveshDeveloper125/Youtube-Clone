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
  return (
    <>
      <Context>
        <TopMenu />
        <div className="h-screen w-screen flex overflow-y-auto">
          <SideMenu />
          <div className="h-fit w-full mx-auto px-24">
            <div className="h-fit w-full flex gap-2 items-center ">
              <img
                src={fire}
                alt="trending-icon"
                className="size-18 border-red-600  rounded-full rotate-20 mix-blend-multiply"
              />
              <h1 className="text-4xl font-bold">Trending</h1>
            </div>

            <ul className="h-fit w-full border-[1.5px] border-transparent border-b-gray-400 flex gap-16">
              <li
                onClick={() => settrendingsection(0)}
                className={`${
                  trendingsection === 0
                    ? `border-[2px] border-transparent border-b-black outline-none p-1.5 text-[20px] text-black font-semibold cursor-pointer`
                    : `border-[2px] border-transparent hover:border-b-black outline-none p-1.5 text-[20px] hover:text-black text-gray-400 font-semibold cursor-pointer`
                }`}
              >
                Now
              </li>
              <li
                onClick={() => settrendingsection(1)}
                className={`${
                  trendingsection === 1
                    ? `border-[2px] border-transparent border-b-black outline-none p-1.5 text-[20px] text-black font-semibold cursor-pointer`
                    : `border-[2px] border-transparent hover:border-b-black outline-none p-1.5 text-[20px] hover:text-black text-gray-400 font-semibold cursor-pointer`
                }`}
              >
                Music
              </li>
              <li
                onClick={() => settrendingsection(2)}
                className={`${
                  trendingsection === 2
                    ? `border-[2px] border-transparent border-b-black outline-none p-1.5 text-[20px] text-black font-semibold cursor-pointer`
                    : `border-[2px] border-transparent hover:border-b-black outline-none p-1.5 text-[20px] hover:text-black text-gray-400 font-semibold cursor-pointer`
                }`}
              >
                Film
              </li>
              <li
                onClick={() => settrendingsection(3)}
                className={`${
                  trendingsection === 3
                    ? `border-[2px] border-transparent border-b-black outline-none p-1.5 text-[20px] text-black font-semibold cursor-pointer`
                    : `border-[2px] border-transparent hover:border-b-black outline-none p-1.5 text-[20px] hover:text-black text-gray-400 font-semibold cursor-pointer`
                }`}
              >
                Sport
              </li>
            </ul>

            {trendingsections[trendingsection]}
          </div>
        </div>
      </Context>
    </>
  );
}

export default Trending;
