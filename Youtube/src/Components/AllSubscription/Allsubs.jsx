import React, { useState } from 'react';
import cutie from '../../assets/Images/cute.jpg';
import { Link } from 'react-router-dom';

function Allsubs() {
  const [dropdown, setdropdown] = useState(false);
  return (
    <>
      <div className="w-full  flex  p-1">
        <Link className="w-[80%] flex p-1">
          <img
            src={cutie}
            alt="channel icon"
            className="size-30 rounded-full object-cover"
          />
          <div className="flex flex-col flex-1 p-1">
            <h1 className=" p-2 text-2xl  ">The Channel Name</h1>
            <h1 className="flex text-gray-400 p-1">
              @this_is_channel_id : 1M Subscribers{' '}
            </h1>
            <p className="line-clamp-1 text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              aspernatur facere est minima tempore officia ut quaerat qui natus
              excepturi tempora dolores quasi provident assumenda architecto nam
              sint, cumque cupiditate!{' '}
            </p>
          </div>
        </Link>
        <div className=" w-[20%]  flex flex-col justify-center items-center p-2 flex-1">
          <button
            onClick={() => {
              setdropdown(!dropdown);
            }}
            className="h-8 w-40 bg-gray-200 rounded-4xl text-center p-1 cursor-pointer active:bg-gray-300"
          >
            Subscribed
          </button>
          <ul
            className={
              dropdown
                ? 'h-fit w-40 shadow-black shadow-lg rounded-xl  flex flex-col p-1'
                : 'hidden'
            }
          >
            <li className=" rounded-xl text-center p-2 cursor-pointer hover:bg-gray-200">
              All
            </li>
            <li className=" rounded-xl text-center p-2 cursor-pointer hover:bg-gray-200">
              None
            </li>
            <li className=" rounded-xl text-center p-2 cursor-pointer hover:bg-gray-200">
              Unsubscribed
            </li>
            <li className=" rounded-xl text-center p-2 cursor-pointer hover:bg-gray-200">
              Subscribed
            </li>
          </ul>
        </div>
      </div>
      <br />
    </>
  );
}

export default Allsubs;
