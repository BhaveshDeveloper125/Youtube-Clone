import React from 'react';
import { Link } from 'react-router-dom';

// Import Icon
import cross from '../../assets/Icons/close.svg';

// Import Images
import rengoku from '../../assets/Images/rengoku.jpg';

function HistoryThumbnail() {
  return (
    <>
      <div className=" h-50 w-full rounded-xl flex p-2 hover:bg-gray-300">
        <Link to="/playlistPlayer/from the history section">
          <img
            src={rengoku}
            alt="thumbnail"
            className="h-full w-80 rounded-xl object-cover"
          />
        </Link>

        <div className="flex flex-col flex-1 gap-1 p-1">
          <div className=" flex gap-2 p-1">
            <Link
              to="/playlistPlayer/from the history section"
              className=" h-15 w-110 font-bold text-lg line-clamp-2"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              asperiores placeat harum? Voluptatem eveniet atque architecto quas
              pariatur porro ipsam dolorum repellat cumque! Ducimus natus cumque
              quam distinctio praesentium delectus!
            </Link>
            <div className=" size-10 rounded-full cursor-pointer p-2 hover:bg-gray-400">
              <img src={cross} alt="cross" className="object-cover" />
            </div>
            <div className=" h-fit w-3 rounded-xl flex flex-col j  ustify-center items-center gap-1 p-1 cursor-pointer active:bg-gray-400">
              <div className="size-0.5 bg-black rounded-full p-0.5"></div>
              <div className="size-0.5 bg-black rounded-full p-0.5"></div>
              <div className="size-0.5 bg-black rounded-full p-0.5"></div>
            </div>
          </div>

          <span className=" w-full flex item-center flex-1">
            <Link to="/user/from the history section" className="">
              Channel Name . view channel{' '}
            </Link>
          </span>

          <Link
            to="/playlistPlayer/from the history section"
            className="line-clamp-3"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            ratione, est provident fuga necessitatibus consequuntur nam
            consectetur nihil delectus praesentium debitis optio distinctio
            natus porro unde quae, commodi repellat iure.
          </Link>
        </div>
      </div>
    </>
  );
}

export default HistoryThumbnail;
