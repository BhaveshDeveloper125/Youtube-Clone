import React from 'react';
import Context from '../../Context/Context';
import TopMenu from '../../Components/TopMenu/TopMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import { Link } from 'react-router-dom';
import Cards from '../../Components/Cards/Cards.jsx';

// Importing Icons
import user from '../../assets/Icons/user.svg';

function You() {
  return (
    <>
      <Context>
        <TopMenu />
        <div className="flex p-2">
          <SideMenu />
          <div className="flex flex-1 flex-col  p-2">
            <Link className="h-40 w-fit bg-red-500 flex  p-2">
              <img
                src={user}
                alt="user"
                className="size-30 object-cover rounded-full"
              />
              <span className="h-20 w-100 p-2 mt-5">
                <h1 className="text-black font-bold text-4xl">
                  User Channel Name
                </h1>
                <div className=" w-80 flex justify-around p-2">
                  <span className=" text-gray-500 line-clamp-1">
                    @Channel ID{' '}
                  </span>
                  <span className=" text-gray-500 line-clamp-1">
                    view Chanel
                  </span>
                </div>
              </span>
            </Link>

            <div className="h-fit w-full bg-green-500  flex flex-col">
              <span className="h-8 w-full flex justify-between ">
                <h1 className="font-bold text-2xl">History</h1>
                <div className=" h-8 w-fit flex justify-center items-center gap-1">
                  <Link className="h-fit w-fit border rounded-full font-bold pl-2 pr-2 border-gray-200 hover:bg-gray-400 ">
                    View All
                  </Link>
                  <button className=" size-2.5 bg-gray-200 rounded-full font-bold flex justify-center items-center p-4 cursor-pointer hover:bg-gray-300 ">
                    &gt;
                  </button>
                  <button className=" size-2.5 bg-gray-200 rounded-full font-bold flex justify-center items-center p-4 cursor-pointer hover:bg-gray-300 ">
                    &lt;
                  </button>
                </div>
              </span>
              <br />
            </div>
            <div className=" h-80 w-full bg-orange-500 flex flex-row overflow-y-auto">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>

            {/* <div className="h-fit w-full bg-pink-500 p-1">
              <HistoryBox />
            </div> */}
          </div>
        </div>
      </Context>
    </>
  );
}

export default You;
