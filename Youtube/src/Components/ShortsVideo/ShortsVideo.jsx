import React, { useState } from 'react';

// Importing Icons
import like from '../../assets/Icons/like.svg';
import comment from '../../assets/Icons/comment.svg';
import share from '../../assets/Icons/share.svg';

function ShortsVideo(props) {
  const [liked, setliked] = useState(false);
  const [disliked, setdisliked] = useState(false);
  console.log(`btn : ${liked}`);

  let btn =
    'size-14 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300';
  let btnico = 'size-6 object-cover';
  return (
    <>
      <div className="h-[100%] w-full flex">
        <video src={props.v} controls className="h-[95%] w-[85%] " />
        <div className=" flex-1 flex flex-col justify-center items-center gap-6">
          <button
            onClick={() => {
              setliked(!liked);
              if (disliked == true) {
                setdisliked(!disliked);
              }
            }}
            className={liked ? `${btn} invert ` : `${btn}`}
          >
            <img src={like} alt="like" className={btnico} />
          </button>
          <button
            onClick={() => {
              setdisliked(!disliked);
              if (liked == true) {
                setliked(!liked);
              }
            }}
            className={disliked ? `${btn} invert ` : `${btn}`}
          >
            <img src={like} alt="dislike" className={`${btnico} rotate-180 `} />
          </button>
          <button className={btn}>
            <img src={comment} alt="comment" className={btnico} />
          </button>
          <button className={btn}>
            <img src={share} alt="share" className={btnico} />
          </button>
          <button className={`${btn} flex flex-col gap-1`}>
            <div className="size-1 bg-black rounded-full"></div>
            <div className="size-1 bg-black rounded-full"></div>
            <div className="size-1 bg-black rounded-full"></div>
          </button>
        </div>
      </div>
    </>
  );
}

export default ShortsVideo;
