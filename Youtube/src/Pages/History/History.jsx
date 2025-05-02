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
              </div>
            </div>
            <div className="h-full w-[40%] bg-red-400 p-1"></div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default History;
