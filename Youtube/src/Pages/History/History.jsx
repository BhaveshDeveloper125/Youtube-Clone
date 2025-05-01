import React from 'react';
import Context from '../../Context/Context';
import TopMenu from '../../Components/TopMenu/TopMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';

function History() {
  return (
    <>
      <Context>
        <TopMenu />
        <SideMenu />
      </Context>
      <h1>History Section</h1>
    </>
  );
}

export default History;
