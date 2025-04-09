import React, { useState } from 'react';
import TopMenu from '../../Components/TopMenu/TopMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import '../../index.css';
import Context from '../../Context/Context';
import { useContext } from 'react';
import Shorts from '../../Pages/Shorts/Shorts.jsx';
import Subscription from '../../Pages/Subscription/Subscription.jsx';
import Cards from '../../Components/Cards/Cards.jsx';

function Home() {
  return (
    <>
      <Context>
        <TopMenu />

        <div className="h-screen w-fit flex ">
          <SideMenu />

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
      </Context>
    </>
  );
}

export default Home;
