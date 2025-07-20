import React from "react";
import Post from "../../Components/PostsComponent/Post";
import Comments from "../../Components/Comments/Comments";
import Context from "../../Context/Context";
import SideMenu from "../../Components/SideMenu/SideMenu";
import { useParams } from "react-router-dom";

// Import Images
import cutie from "../../assets/Images/cute.jpg";
import TopMenu from "../../Components/TopMenu/TopMenu";

function DisplayPost() {
  return (
    <>
      <Context>
        <TopMenu />
        <div className="h-screen w-full  flex">
          <SideMenu />

          <div className="flex flex-1  overflow-hidden">
            <div className="w-full flex flex-col items-center overflow-y-auto p-4">
              <Post />

              <div className="w-full">
                <div className="w-full p-4 flex gap-4 items-center justify-between">
                  <h1 className="text-2xl font-bold">1M Comments</h1>

                  <div className="relative group">
                    <button className="p-2 flex gap-2 justify-center items-center cursor-pointer">
                      <i className="fas fa-sort" />
                      <span>Sort by</span>
                    </button>
                    <div className="bg-white rounded-2xl hidden absolute top-10 left-0 group-hover:block z-10 shadow-md">
                      <ul>
                        <li className="w-40 hover:bg-gray-200 rounded-xl p-2 text-center">
                          Top Comments
                        </li>
                        <li className="w-40 hover:bg-gray-200 rounded-xl p-2 text-center">
                          New comments first
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="w-full p-4">
                  <form action="" method="post" className="w-full">
                    <div className="w-full flex gap-4 items-center">
                      <img
                        src={cutie}
                        alt="channel-logo"
                        className="size-10 rounded-full object-cover"
                      />
                      <input
                        type="search"
                        placeholder="add a comment..."
                        className="h-16 w-full border-b border-gray-400 outline-none"
                      />
                    </div>

                    <div className="w-full p-4 flex justify-end">
                      <input
                        type="reset"
                        value="Cancel"
                        className="p-2 rounded-2xl hover:bg-blue-200 cursor-pointer m-2"
                      />
                      <input
                        type="submit"
                        value="Comment"
                        className="p-2 bg-blue-700 rounded-2xl text-white hover:bg-blue-500 cursor-pointer m-2"
                      />
                    </div>
                  </form>
                </div>
              </div>

              <div className="w-full">
                {[...Array(6)].map((_, i) => (
                  <Comments key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default DisplayPost;
