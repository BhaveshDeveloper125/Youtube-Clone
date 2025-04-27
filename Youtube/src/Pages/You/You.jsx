import React from 'react';
import Context from '../../Context/Context';
import TopMenu from '../../Components/TopMenu/TopMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import { Link } from 'react-router-dom';

// Importing Icons
import user from '../../assets/Icons/user.svg';

function You() {
  return (
    <>
      <Context>
        <TopMenu />
        <div className="flex">
          <SideMenu />
          <div className="flex flex-1 flex-col  p-2">
            <div className="h-40 w-full flex  p-2">
              <img
                src={user}
                alt="user"
                className="size-30 object-cover rounded-full"
              />
              <Link className="h-20 w-100 p-2 mt-5">
                <h1 className="text-black font-bold text-4xl">
                  User Channel Name
                </h1>
                <div className=" w-80 flex justify-around">
                  <span className="line-clamp-1">Channel ID </span>
                  <span className="line-clamp-1">view Chanel</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default You;
