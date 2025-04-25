import React from 'react';
import TopMenu from '../../Components/TopMenu/TopMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import Context from '../../Context/Context';
import Allsubs from '../../Components/AllSubscription/Allsubs';

function AllSubscription() {
  return (
    <>
      <Context>
        <TopMenu />
        <div className="flex">
          <SideMenu />
          <div className="flex flex-1 justify-center items-center  p-1">
            <div className=" h-full w-[70%] p-18 ">
              <h1 className="text-4xl font-bold">All subscriptions</h1>
              <br />
              <select name="" id="" className="bg-gray-200 p-1 rounded-md">
                <option value="" className="hover:bg-gray-200">
                  Most Relevant
                </option>
                <option value="" className="hover:bg-gray-200">
                  New Activity
                </option>
                <option value="" className="hover:bg-gray-200">
                  A-Z
                </option>
              </select>
              <br />
              <br />
              <div className=" h-[35%] p-1 overflow-auto ">
                <Allsubs />
                <Allsubs />
                <Allsubs />
                <Allsubs />
                <Allsubs />
                <Allsubs />
                <Allsubs />
                <Allsubs />
              </div>
            </div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default AllSubscription;
