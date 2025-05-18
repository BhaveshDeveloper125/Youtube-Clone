import React from 'react';
import Context from '../../Context/Context';
import TopMenu from '../../Components/TopMenu/TopMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import HistoryThumbnail from '../../Components/HistoryThumbnail/HistoryThumbnail';

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
              <div className=" h-120 w-100 bg-red-500 p-1">
                <form action="" method="post">
                  <input type="text" placeholder="Search Watch History" />
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
