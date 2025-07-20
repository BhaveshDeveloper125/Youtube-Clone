import React from "react";
import Post from "../../Components/PostsComponent/Post";
import Comments from "../../Components/Comments/Comments";
import { useParams } from "react-router-dom";

// Import Images
import cutie from "../../assets/Images/cute.jpg";

function DisplayPost() {
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center overflow-auto ">
        <Post />
        <div className=" h-fit w-full">
          <div className="h-fit w-full p-4 flex gap-4">
            <h1 className="text-2xl font-bold">1M Comments</h1>
            <button className=" p-2 relative flex gap-2 justify-center items-center cursor-pointer group">
              <i className="fas fa-sort" />
              <span>Sort by</span>

              <div className="size-fit bg-white rounded-2xl hidden absolute top-10 left-0 group-focus:block ">
                <ul>
                  <li className="h-fit w-40 hover:bg-gray-200 rounded-xl p-2 text-center">
                    Top Comments
                  </li>
                  <li className="h-fit w-40 hover:bg-gray-200 rounded-xl p-2 text-center">
                    New comments first
                  </li>
                </ul>
              </div>
            </button>
          </div>
          <div className="h-fit w-full p-4 flex gap-4">
            <form action="" method="post" className="w-full ">
              <div className="w-full flex gap-4 items-center">
                <img
                  src={cutie}
                  alt="channel-logo"
                  className="size-10 rounded-full object-cover"
                />
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="add a comment..."
                  className="h-16 w-full border border-b-gray-400 border-t-transparent border-l-transparent border-r-transparent outline-none"
                />
              </div>
              <span className="w-full p-4 flex justify-end">
                <input
                  type="reset"
                  value="Cancel"
                  className="p-2  rounded-2xl hover:bg-blue-200 cursor-pointer m-2"
                />
                <input
                  type="submit"
                  value="Comment"
                  className="p-2 bg-blue-700 rounded-2xl text-white hover:bg-blue-500 cursor-pointer m-2"
                />
              </span>
            </form>
          </div>
        </div>
        <div className="  w-full">
          {[...Array(6)].map((i) => (
            <Comments key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayPost;
