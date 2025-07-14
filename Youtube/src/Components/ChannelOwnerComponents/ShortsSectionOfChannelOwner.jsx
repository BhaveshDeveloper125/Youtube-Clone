import React, { useState } from "react";
import Latest from "./ChannelOwnerShortsSection/Latest";
import Oldest from "./ChannelOwnerShortsSection/Oldest";
import Popular from "./ChannelOwnerShortsSection/Popular";

function ShortsSectionOfChannelOwner() {
  const [shorts, setshorts] = useState(1);
  const DisplayShortsSection = {
    1: <Latest />,
    2: <Oldest />,
    3: <Popular />,
  };
  return (
    <>
      <div className="flex-1">
        <nav className="h-full w-full">
          <ul className="h-fit w-full p-2 flex gap-2">
            <li
              onClick={() => setshorts(1)}
              className={`${
                shorts === 1
                  ? `bg-black text-white rounded-xl p-2 cursor-pointer`
                  : `bg-gray-200 rounded-xl p-2  cursor-pointer`
              }`}
            >
              Latest
            </li>
            <li
              onClick={() => setshorts(2)}
              className={`${
                shorts === 2
                  ? `bg-black text-white rounded-xl p-2 cursor-pointer`
                  : `bg-gray-200 rounded-xl p-2  cursor-pointer`
              }`}
            >
              Oldest
            </li>
            <li
              onClick={() => setshorts(3)}
              className={`${
                shorts === 3
                  ? `bg-black text-white rounded-xl p-2 cursor-pointer`
                  : `bg-gray-200 rounded-xl p-2  cursor-pointer`
              }`}
            >
              Popular
            </li>
          </ul>
        </nav>
        {DisplayShortsSection[shorts]}
      </div>
    </>
  );
}

export default ShortsSectionOfChannelOwner;
