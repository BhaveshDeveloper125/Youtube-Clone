import React from 'react';
import TopMenu from '../../Components/TopMenu/TopMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import Context from '../../Context/Context';

function AllSubscription() {
  return (
    <>
      <Context>
        <TopMenu />
        <SideMenu />
      </Context>
    </>
  );
}

export default AllSubscription;
