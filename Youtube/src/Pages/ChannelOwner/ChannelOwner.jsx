import React from "react";
import Context from "../../Context/Context";
import TopMenu from "../../Components/TopMenu/TopMenu";
import SideMenu from "../../Components/SideMenu/SideMenu";
import { useParams } from "react-router-dom";

// import Images
import rengoku from "../../assets/Images/rengoku.jpg";

function ChannelOwner() {
  const params = useParams();
  return (
    <>
      <Context>
        <TopMenu />
        <div className="flex">
          <SideMenu />
          <div className="flex justify-center items-center flex-1">
            <div className="h-screen w-[85%]  ">
              <img
                src={rengoku}
                alt="channel banner"
                className="h-60 w-full rounded-3xl object-cover"
              />

              {/* <h1>The Page of Youtuber You Subscribed</h1>
              <h1>Channel Owner Pager {params.id}</h1> */}
            </div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default ChannelOwner;
