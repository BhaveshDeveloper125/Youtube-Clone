import React from 'react';
import { Link } from 'react-router-dom';

// Importing Icons
import twitter from '../../assets/Icons/twitter.svg';
import facebook from '../../assets/Icons/facebook.svg';
import instagram from '../../assets/Icons/instagram.svg';
import reddit from '../../assets/Icons/reddit.svg';
import whatsapp from '../../assets/Icons/whatsapp-_1_.svg';
import cross from '../../assets/Icons/close.svg';

function Sharesection(props) {
  const { share, setshare } = props;
  return (
    <>
      <div
        className={
          share
            ? 'size-full bg-black/80 flex justify-center items-center p-1 absolute inset-0 z-9'
            : 'hidden'
        }
      >
        <div className="h-50 w-100 bg-white rounded-2xl p-4">
          <div className="h-[20%] w-full  flex justify-between items-center p-1">
            <span>share</span>
            <img
              src={cross}
              alt="cross"
              onClick={() => setshare(false)}
              className="size-5 cursor-pointer active:bg-gray-500"
            />
          </div>
          <div className="h-[60%] w-full  flex justify-center items-center ">
            <Link className="size-full flex justify-center items-center ">
              <img src={whatsapp} alt="twitter" className="size-1/2 " />
            </Link>
            <Link className="size-full flex justify-center items-center ">
              <img src={facebook} alt="twitter" className="size-1/2 " />
            </Link>
            <Link className="size-full flex justify-center items-center ">
              <img src={instagram} alt="twitter" className="size-1/2 " />
            </Link>
            <Link className="size-full flex justify-center items-center ">
              <img src={twitter} alt="twitter" className="size-1/2 " />
            </Link>
            <Link className="size-full flex justify-center items-center ">
              <img src={reddit} alt="twitter" className="size-1/2 " />
            </Link>
          </div>

          <div className="h-[20%] border  border-gray-400 rounded-2xl flex justify-between p-1">
            <Link className="line-clamp-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              temporibus nihil quisquam animi non a ad. Debitis, nobis laborum!
              Reiciendis aut esse veniam rerum rem architecto inventore commodi
              consequuntur cum.
            </Link>
            <button className="size-full bg-blue-500 rounded-lg text-white flex justify-center items-center p-0.5 cursor-pointer hover:bg-blue-400 active:bg-blue-800">
              copy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sharesection;
