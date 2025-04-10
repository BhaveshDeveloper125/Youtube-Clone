import React, { useState } from 'react';

// Importing Icons
import like from '../../assets/Icons/like.svg';
import comment from '../../assets/Icons/comment.svg';
import share from '../../assets/Icons/share.svg';
import cutie from '../../assets/Images/cute.jpg';

function ShortsVideo(props) {
  const [liked, setliked] = useState(false);
  const [disliked, setdisliked] = useState(false);
  console.log(`btn : ${liked}`);

  let btn =
    'size-10 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300';
  let btnico = 'size-6 object-cover';
  return (
    <>
      {/* <div className="h-[100%] w-full bg-red-500 flex">
        <video src={props.v} controls className="h-full w-[85%] mt-1" />
        <div className=" flex-1 flex flex-col justify-end items-center gap-4">
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
          <p className=" text-sm font-semibold">1M likes</p>
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
          <p className=" text-sm font-semibold">Dislike</p>
          <button className={btn}>
            <img src={comment} alt="comment" className={btnico} />
          </button>
          <p className=" text-sm font-semibold">999</p>
          <button className={btn}>
            <img src={share} alt="share" className={btnico} />
          </button>
          <p className=" text-sm font-semibold">Share</p>
          <button className={`${btn} flex flex-col gap-1`}>
            <div className="size-1 bg-black rounded-full"></div>
            <div className="size-1 bg-black rounded-full"></div>
            <div className="size-1 bg-black rounded-full"></div>
          </button>
          <div className="size-14 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300">
            <img
              src={cutie}
              alt="img"
              className="size-full rounded-full object-cover"
            />
          </div>
        </div>
      </div> */}

      {/* <div className=" h-[90%] w-full  p-4 flex">
        <video
          src={props.v}
          controls
          className="h-full w-[83%] bg-gray-400  rounded-xl"
        />
        <div className="flex flex-1  flex-col gap-4 justify-center items-center">
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
          <p className=" text-sm font-semibold">1M likes</p>
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
          <p className=" text-sm font-semibold">Dislike</p>
          <button className={btn}>
            <img src={comment} alt="comment" className={btnico} />
          </button>
          <p className=" text-sm font-semibold">999</p>
          <button className={btn}>
            <img src={share} alt="share" className={btnico} />
          </button>
          <p className=" text-sm font-semibold">Share</p>
          <button className={`${btn} flex flex-col gap-1`}>
            <div className="size-1 bg-black rounded-full"></div>
            <div className="size-1 bg-black rounded-full"></div>
            <div className="size-1 bg-black rounded-full"></div>
          </button>
          <div className="size-14 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300">
            <img
              src={cutie}
              alt="img"
              className="size-full rounded-full object-cover"
            />
          </div>
        </div>
      </div> */}

      <div className="h-full w-full flex">
        <div className="h-[90%] w-[85%] rounded-xl aspect-[16/9] relative">
          <video
            src={props.v}
            // controls
            className="h-full w-full rounded-xl object-cover"
          />
          {/* Notice : after applying the positin absolute we apply the top: 0, right: 0, bottom: 0, and left: 0 and the shorthand for the top: 0, right: 0, bottom: 0, and left: 0, is the inset-0 */}
          <div className="h-15  absolute inset-0  bg-red-500 rounded-xl">
            <button>Play</button>
            <button>Volume</button>
          </div>
        </div>
        <div className="flex flex-1  flex-col gap-4 justify-center items-center">
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
          <p className=" text-sm font-semibold">1M likes</p>
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
          <p className=" text-sm font-semibold">Dislike</p>
          <button className={btn}>
            <img src={comment} alt="comment" className={btnico} />
          </button>
          <p className=" text-sm font-semibold">999</p>
          <button className={btn}>
            <img src={share} alt="share" className={btnico} />
          </button>
          <p className=" text-sm font-semibold">Share</p>
          <button className={`${btn} flex flex-col gap-1`}>
            <div className="size-1 bg-black rounded-full"></div>
            <div className="size-1 bg-black rounded-full"></div>
            <div className="size-1 bg-black rounded-full"></div>
          </button>
          <div className="size-14 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300">
            <img
              src={cutie}
              alt="img"
              className="size-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShortsVideo;
