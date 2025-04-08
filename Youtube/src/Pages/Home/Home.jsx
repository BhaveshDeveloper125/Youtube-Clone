import React, { createContext, useRef, useState } from 'react';

// Import Component
import Card from '../../Components/Cards/Card';
import TopMenu from '../../Components/Menu/TopMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import Shorts from '../Shorts/Shorts';

export const MenuData = createContext();

function Home() {
  const [sidebar, setsidebar] = useState(false);

  return (
    <>
      <MenuData.Provider value={{ sidebar, setsidebar }}>
        <TopMenu />

        <div className="h-screen w-fit flex ">
          <SideMenu />

          <div className="flex flex-1 flex-wrap  overflow-auto">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        {/* To provide the Menu expand functionality on the page Register the page here  */}
      </MenuData.Provider>
    </>
  );
}

export default Home;
