import React from 'react';
import { Link } from 'react-router-dom';

// Import Icons
import playlist from '../../assets/Icons/playlist.svg';

// Import Images
import cutie from '../../assets/Images/cute.jpg';

function PlaylistComponent() {
  return (
    <>
      <Link className="shadow-black-800 rounded-xl shadow-2xl text-center flex flex-col justify-center items-center relative hover:shadow-none">
        <img
          src={cutie}
          alt="playlist thumbnail"
          className="h-1.5 w-70 rounded-xl blur-[1px] opacity-100 object-cover"
        />
        <img
          src={cutie}
          alt="playlist thumbnail"
          className="h-1.5 w-80 rounded-xl blur-[1px] opacity-100 object-cover"
        />
        <img
          src={cutie}
          alt="playlist thumbnail"
          className="h-50 w-130 rounded-xl object-cover"
        />
        <span className="h-5 w-32 bg-black/50 rounded-sm flex justify-center items-center gap-2 absolute bottom-1 right-2 p-2">
          <img src={playlist} alt="playlist" className="size-4 invert" />
          <span className="invert">100 videos</span>
        </span>
      </Link>
    </>
  );
}

export default PlaylistComponent;
