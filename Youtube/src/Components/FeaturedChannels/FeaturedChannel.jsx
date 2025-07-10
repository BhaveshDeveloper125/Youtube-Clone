import React from "react";

// Import Images
import goku from "../../assets/Images/5.jpg";

function FeaturedChannel() {
  return (
    <>
      <div className="size-full p-1 flex flex-col justify-center items-center">
        <img
          src={goku}
          alt="channel-logo"
          className="size-40 rounded-full object-cover"
        />
        <div className="w-full p-1 line-clamp-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
          dolores nesciunt. Beatae explicabo necessitatibus modi culpa quaerat
          sint rem repellat! Debitis quod quis eveniet amet corporis omnis
          soluta similique reiciendis.
        </div>
        <button className="bg-gray-300 hover:bg-gray-200 rounded-xl p-2 cursor-pointer">
          subscribe
        </button>
      </div>
    </>
  );
}

export default FeaturedChannel;
