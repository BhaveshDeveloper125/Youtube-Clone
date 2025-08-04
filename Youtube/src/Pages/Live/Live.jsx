import React from "react";
import Context from "../../Context/Context";
import TopMenu from "../../Components/TopMenu/TopMenu";
import SideMenu from "../../Components/SideMenu/SideMenu";

function Live() {
  return (
    <>
      <Context>
        <TopMenu />
        <div className=" h-screen w-screen flex">
          <SideMenu />
          <div className="flex-1">asdasd</div>
        </div>
      </Context>
    </>
  );
}

export default Live;
