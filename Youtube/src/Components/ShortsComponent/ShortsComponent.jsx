import React from "react";

import cutie from "../../assets/Images/cute.jpg";

function ShortsComponent() {
  return (
    <>
      <div className=" hover:bg-gray-200 active:bg-gray-300 h-full w-full rounded-2xl p-2 relative cursor-pointer">
        <img
          src={cutie}
          alt="thumbnail"
          className="h-[90%] w-full rounded-2xl object-cover"
        />
        <div className="h-fit w-full flex">
          <p className="h-full w-[95%] line-clamp-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            asperiores exercitationem nulla fugiat esse neque alias expedita
            necessitatibus, omnis animi dolore, iusto molestias tenetur? Odio
            aperiam eveniet qui provident sapiente.
          </p>
          <button className="active:bg-gray-200 rounded-2xl flex-1 flex gap-1.5 flex-col justify-center items-center cursor-pointer group">
            <div className="size-[4px] bg-black rounded-full"></div>
            <div className="size-[4px] bg-black rounded-full"></div>
            <div className="size-[4px] bg-black rounded-full"></div>
            <div className="h-fit w-full bg-white rounded-xl absolute bottom-10 left-0 hidden group-focus:block">
              <ul className="h-full w-full bg-white rounded-xl">
                <li className="hover:bg-gray-200 rounded-xl p-2 cursor-pointer">
                  <i className="fas fa-plus-square"></i> Add to queue
                </li>
                <li className="hover:bg-gray-200 rounded-xl p-2 cursor-pointer">
                  <i className="fas fa-comment"></i> Send Feed back
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default ShortsComponent;
