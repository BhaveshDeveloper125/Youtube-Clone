import React, { useRef, useState, useTransition } from 'react';

// Importing Icons
import like from '../../assets/Icons/like.svg';
import comment from '../../assets/Icons/comment.svg';
import share from '../../assets/Icons/share.svg';
import play from '../../assets/Icons/play.svg';
import pause from '../../assets/Icons/pause.png';
import fullscreen from '../../assets/Icons/fullscreen.svg';
import minimize from '../../assets/Icons/minimize.svg';
import volume from '../../assets/Icons/volume.svg';
import mute from '../../assets/Icons/mute.svg';

// Importing Images
import cutie from '../../assets/Images/cute.jpg';

function ShortsVideo(props) {
  const [liked, setliked] = useState(false);
  const [disliked, setdisliked] = useState(false);
  const [videplay, setvidplay] = useState(false);
  const [vol, setvol] = useState(true);
  const [screen, setscreen] = useState(false);

  // Controllers Settings and satets

  const videocontrols = useRef(null);
  const [playing, setplaying] = useState(false);

  let btn =
    'size-10 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300';
  let btnico = 'size-6 object-cover';
  return (
    <>
      <div className="h-full w-full flex">
        <div className="h-[90%] w-[85%] rounded-xl aspect-[16/9] relative">
          <video
            ref={videocontrols}
            src={props.v}
            className="h-full w-full rounded-xl object-cover"
          />
          {/* Notice : after applying the positin absolute we apply the top: 0, right: 0, bottom: 0, and left: 0 and the shorthand for the top: 0, right: 0, bottom: 0, and left: 0, is the inset-0 */}
          <div className="h-12 absolute inset-0 flex justify-around mt-4 rounded-xl opacity-5 hover:opacity-90">
            <button
              onClick={() => {
                if (playing) {
                  videocontrols.current.pause();
                  setplaying(false);
                } else {
                  videocontrols.current.play();
                  setplaying(true);
                }
              }}
              className="h-full w-12 bg-white opacity-50 rounded-full cursor-pointer object-cover"
            >
              <img
                src={videplay ? play : pause}
                alt="play"
                className="h-full w-full  object-cover "
                onClick={() => setvidplay(!videplay)}
              />
            </button>

            <div className="h-full w-[50%] bg-black opacity-50 rounded-full flex gap-2 justify-around items-center overflow-hidden  pl-2 pr-2">
              <img
                src={vol ? mute : volume}
                alt="volume"
                // 9 and 6
                className="size-9 invert object-cover cursor-pointer
              "
                onClick={() => setvol(!vol)}
              />
              <input
                type="range"
                name="volume"
                min={0}
                max={100}
                value={vol ? undefined : 0}
                id="volume"
                className=" flex flex-1 cursor-pointer"
              />
            </div>

            <button className="h-full w-12 bg-black flex justify-center items-center opacity-50  rounded-full object-cover cursor-pointer">
              <img
                src={screen ? minimize : fullscreen}
                alt="fullscreen"
                className="size-10 invert object-cover"
                onClick={() => setscreen(!screen)}
              />
            </button>
          </div>

          <div className="h-12 absolute bottom-0 bg-red-500 flex justify-around">
            Bhavesh
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
