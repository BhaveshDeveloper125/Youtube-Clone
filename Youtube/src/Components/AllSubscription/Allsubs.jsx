import React from 'react';
import cutie from '../../assets/Images/cute.jpg';
import { Link } from 'react-router-dom';

function Allsubs() {
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
        <div className=" w-[20%] bg-pink-500 flex flex-col flex-1">
          {/* <select
            name=""
            id=""
            className="h-fit bg-gray-200 rounded-lg p-2 m-1
          "
          >
            <option value="" className="inline-block p-4">
              All
            </option>
            <option value="" className="inline-block p-4">
              Personalized
            </option>
            <option value="" className="inline-block p-4">
              None
            </option>
            <option value="" className="inline-block p-4">
              Unsubscribe
            </option>
          </select> */}

          <div className="h-8 w-40 bg-red-500 rounded-4xl text-center p-1 mt-2 cursor-pointer">
            Subscribed
          </div>
          <div className=" h-fit w-40 bg-yellow-500 flex flex-col p-1">
            <span className="text-center">All</span>
            <span className="text-center">None</span>
            <span className="text-center">Unsubscribed</span>
            <span className="text-center">Subscribed</span>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Allsubs;
