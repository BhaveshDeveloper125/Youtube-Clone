import React, { useState } from "react";
import { Link } from "react-router-dom";

// Importing Images
import cutie from "../../assets/Images/cute.jpg";
import like from "../../assets/Icons/like.svg";

function Comments() {
  const [expand, setexpand] = useState(false);
  return (
    <>
      <div className="h-fit w-full p-4 flex gap-4">
        <Link className="h-full w-fit ">
          <img
            src={cutie}
            alt="user icon"
            className="size-10 rounded-full object-cover"
          />
        </Link>
        <div className="flex flex-col flex-1">
          <span>
            <Link className="text-black font-bold">@Bhavesh</Link>
            <span className="text-gray-400 p-2">1 hour ago</span>
          </span>
          <span className={expand ? "" : "line-clamp-3"}>
            comment comment comment comment comment comment comment comment
            comment comment comment comment comment comment comment comment
            comment comment comment comment comment comment comment comment
            comment comment comment comment comment comment comment comment
            comment comment comment comment comment comment comment comment{" "}
          </span>
          <Link
            onClick={() => setexpand(!expand)}
            className="text-gray-500 hover:underline"
          >
            {expand ? "show less " : "show more"}{" "}
          </Link>
          <div className="  flex gap-9 ">
            <button>
              <img src={like} alt="like" className=" size-5 " />
            </button>
            <button>
              <img src={like} alt="dislike" className=" size-5 rotate-180 " />
            </button>
            <button className="relative">
              <img
                src={cutie}
                alt="dislike"
                className=" size-8 object-cover rounded-full "
              />
              <div className="size-6  flex justify-center items-center rounded-full absolute top-5 p-1">
                ❤️
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
