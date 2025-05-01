import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import rengoku from '../../assets/Images/rengoku.jpg';

function HistoryThumbnail() {
  return (
    <>
      <div className=" h-50 w-full flex p-1 hover:bg-gray-300">
        <Link>
          <img
            src={rengoku}
            alt="thumbnail"
            className="h-full w-80 rounded-xl object-cover"
          />
        </Link>
        <div className="felx flex-col flex-1 p-1">
          <Link className=" font-bold text-lg line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            asperiores placeat harum? Voluptatem eveniet atque architecto quas
            pariatur porro ipsam dolorum repellat cumque! Ducimus natus cumque
            quam distinctio praesentium delectus!
          </Link>

          <span className=" w-full flex item-center flex-1">
            <Link className="p-2">Channel Name . view channel </Link>{' '}
          </span>

          <Link className="line-clamp-2">
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
