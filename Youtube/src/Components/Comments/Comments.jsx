import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Importing Images
import cutie from '../../assets/Images/cute.jpg';

function Comments() {
  const [expand, setexpand] = useState(false);
  return (
    <>
      <div className="h-fit w-full flex gap-4">
        <div className="h-full w-fit ">
          <img
            src={cutie}
            alt="user icon"
            className="size-10 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col flex-1">
          <span className="text-black font-bold">@Bhavesh</span>
          <span className={expand ? '' : 'line-clamp-4'}>
            comment comment comment comment comment comment comment comment
            comment comment comment comment comment comment comment comment
            comment comment comment comment comment comment comment comment
            comment comment comment comment comment comment comment comment
            comment comment comment comment comment comment comment comment{' '}
          </span>
          <Link onClick={() => setexpand(!expand)}>
            {' '}
            {expand ? 'show less ' : 'show more'}{' '}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Comments;
