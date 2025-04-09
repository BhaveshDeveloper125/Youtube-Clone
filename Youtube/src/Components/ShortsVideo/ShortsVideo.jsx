import React from 'react';

function ShortsVideo(props) {
  return (
    <>
      <div className="h-[100%] w-[85%] bg-orange-500 border-2 border-black ">
        <video src={props.v} controls className="h-fit w-full"></video>
      </div>
    </>
  );
}

export default ShortsVideo;
