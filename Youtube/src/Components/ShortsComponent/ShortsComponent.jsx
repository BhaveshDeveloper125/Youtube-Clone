import React from "react";

import cutie from "../../assets/Images/cute.jpg";

function ShortsComponent() {
  return (
    <>
      <div className=" h-full w-full p-2 ">
        <img
          src={cutie}
          alt="thumbnail"
          className="h-[90%] w-full object-cover"
        />
        <div className="h-fit w-full flex">
          <p className="h-full w-[95%] line-clamp-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            asperiores exercitationem nulla fugiat esse neque alias expedita
            necessitatibus, omnis animi dolore, iusto molestias tenetur? Odio
            aperiam eveniet qui provident sapiente.
          </p>
          <div className="flex-1 flex gap-1.5 flex-col justify-center items-center cursor-pointer">
            <div className="size-[4px] bg-black rounded-full "></div>
            <div className="size-[4px] bg-black rounded-full "></div>
            <div className="size-[4px] bg-black rounded-full "></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShortsComponent;
