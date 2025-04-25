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
        <div className=" w-[20%]  flex flex-1 justify-center ">
          {/* <select
            name=""
            id=""
            className="h-fit bg-gray-200 p-2 m-1
          "
          >
            <option value="" className="inline-block p-4">
              <img src={cutie} alt="icon" className="size-4" />
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
        </div>
      </div>
      <br />
    </>
  );
}

export default Allsubs;
