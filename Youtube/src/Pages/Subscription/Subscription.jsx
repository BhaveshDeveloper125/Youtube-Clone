import React from 'react';
import TopMenu from '../../Components/TopMenu/TopMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import Context from '../../Context/Context';

function Subscription() {
  return (
    <>
      <Context>
        <TopMenu />
        <SideMenu />
      </Context>
    </>
  );
}

export default Subscription;
