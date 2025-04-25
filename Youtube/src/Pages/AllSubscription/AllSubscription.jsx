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
        <div className="flex bg-red-500">
          <SideMenu />
          <div className="flex flex-1 bg-green-500 p-1j">
            <Allsubs />
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
      </Context>
    </>
  );
}

export default AllSubscription;
