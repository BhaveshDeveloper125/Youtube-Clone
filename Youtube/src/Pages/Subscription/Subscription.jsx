import React from 'react';
import TopMenu from '../../Components/TopMenu/TopMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import Context from '../../Context/Context';
import Cards from '../../Components/Cards/Cards';

import { Link } from 'react-router-dom';

function Subscription() {
  return (
    <>
      <Context>
        <TopMenu />

        <div className="h-screen w-fit flex ">
          <SideMenu />

          <div className="flex flex-col flex-1 flex-wrap  overflow-auto">
            <div className="h-20 w-[96%] bg-white flex justify-between items-center absolute">
              <h1 className=" font-bold text-xl">Latest</h1>
              <Link to="/allsubs" className="text-blue-500 font-bold text-xl">
                Manage
              </Link>
            </div>
            <br />
            <br />
            <br />
            <div className="flex flex-1 flex-wrap  overflow-auto">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default Subscription;
