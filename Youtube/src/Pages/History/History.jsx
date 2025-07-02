import React from "react";
import Context from "../../Context/Context";
import TopMenu from "../../Components/TopMenu/TopMenu";
import SideMenu from "../../Components/SideMenu/SideMenu";
import HistoryThumbnail from "../../Components/HistoryThumbnail/HistoryThumbnail";

// Channel Owner Section Components
import HomeSectionOfChannelOwner from "../../Components/ChannelOwnerComponents/HomeSectionOfChannelOwner";

function History() {
  return (
    <>
      <Context>
        <TopMenu />
        <div className="flex">
          <SideMenu />
          <div className="flex flex-1">
            <div className="h-full w-[60%] p-1">
              <h1 className="text-4xl font-bold p-15 ">Watch History </h1>
              <div className=" h-131 w-full  p-2 overflow-auto">
                <HistoryThumbnail />
                <HistoryThumbnail />
                <HistoryThumbnail />
                <HistoryThumbnail />
                <HistoryThumbnail />
                <HistoryThumbnail />
                <HistoryThumbnail />
                <HistoryThumbnail />
                <HistoryThumbnail />
              </div>
            </div>
            <div className="h-full w-[40%] flex justify-center items-center p-1">
              <div className=" h-120 w-100  p-1">
                <form
                  action=""
                  method="post"
                  className="flex flex-col justify-center items-center p-4"
                >
                  <div className="w-full  p-4 flex justify-center items-center gap-3">
                    <i className="fas fa-magnifying-glass"></i>
                    <input
                      type="search"
                      name=""
                      id=""
                      placeholder="Search Watch History"
                      className="w-[80%] border-0 border-b border-black outline-none"
                    />
                  </div>
                  <div className="w-full p-4 flex items-center gap-3">
                    <i className="fas fa-trash  text-lg"></i>
                    <button className="p-2 text-left hover:bg-gray-100 rounded">
                      Clear all watch history
                    </button>
                  </div>
                  <div className="w-full p-4 flex items-center gap-3">
                    <i className="fas fa-pause  text-lg"></i>
                    <button className="p-2 text-left hover:bg-gray-100 rounded">
                      pause the watch history
                    </button>
                  </div>
                  <div className="w-full p-4 flex items-center gap-3">
                    <i className="fas fa-gear  text-lg"></i>
                    <button className="p-2 text-left hover:bg-gray-100 rounded">
                      Manage all history
                    </button>
                  </div>
                  <div className="w-full p-4 flex items-center gap-3">
                    <button className="pl-8 text-left hover:bg-gray-100 rounded">
                      comments
                    </button>
                  </div>
                  <div className="w-full p-4 flex items-center gap-3">
                    <button className="pl-8 text-left hover:bg-gray-100 rounded">
                      posts
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default History;
