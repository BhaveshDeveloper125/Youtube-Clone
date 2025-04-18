import React, { useRef, useState, useTransition } from 'react';
import { Link } from 'react-router-dom';

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
import music from '../../assets/Icons/music.svg';

// Importing Images
import cutie from '../../assets/Images/cute.jpg';

function ShortsVideo(props) {
  const [liked, setliked] = useState(false);
  const [disliked, setdisliked] = useState(false);
  const [videplay, setvidplay] = useState(false);
  const [vol, setvol] = useState(true);
  const [screen, setscreen] = useState(false);
  const [showbar, setshowbar] = useState(true);

  // Controllers Settings and satets
  const videocontrols = useRef(null);
  const [playing, setplaying] = useState(false);
  const [videVolume, setvideVolume] = useState(0.5);
  const [progress, setprogress] = useState(0);

  //Fullscreen Settings and State
  const FullscreenRef = useRef(document.documentElement);

  const Volumebar = vol ? (
    <input
      type="range"
      name="volume"
      min={0}
      max={1}
      step={0.01}
      value={videVolume}
      id="volume"
      className=" flex flex-1 cursor-pointer"
      onChange={HandleVolume}
    />
  ) : (
    <input
      type="range"
      name="volume"
      min={0}
      max={0}
      step={0.01}
      value={videVolume}
      id="volume"
      className=" flex flex-1 cursor-pointer"
      onChange={HandleVolume}
      readOnly
    />
  );

  function HandleVolume(e) {
    let volumes = e.target.value;
    setvideVolume(volumes);

    if (videocontrols.current) {
      videocontrols.current.volume = volumes;
    }
  }

  function HandleProgressBar() {
    if (videocontrols.current) {
      let currentTime = videocontrols.current.currentTime;
      let duration = videocontrols.current.duration;
      let ProgressPercentage = (currentTime / duration) * 100;
      setprogress(ProgressPercentage);
    }
  }
  let btn =
    'size-10 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300';
  let btnico = 'size-6 object-cover';
  let subcardstyle = 'text-center hover:bg-gray-200 p-2';
  return (
    <>
      <div className="h-full w-full flex cursor-pointer">
        <div className="h-[90%] w-[85%] rounded-xl aspect-[16/9] relative">
          <video
            ref={videocontrols}
            src={props.v}
            onTimeUpdate={HandleProgressBar}
            onClick={() => {
              if (playing) {
                videocontrols.current.pause();
                setplaying(false);
                setvidplay(false);
              } else {
                videocontrols.current.play();
                setplaying(true);
                setvidplay(true);
              }
            }}
            className="h-full w-full rounded-xl object-cover"
          />
          {/* Notice : after applying the positin absolute we apply the top: 0, right: 0, bottom: 0, and left: 0 and the shorthand for the top: 0, right: 0, bottom: 0, and left: 0, is the inset-0 */}
          <div className="h-12 absolute inset-0 flex justify-around mt-4 rounded-xl opacity-0 hover:opacity-100">
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
              className="h-full w-12   rounded-full cursor-pointer object-cover"
            >
              <img
                src={videplay ? pause : play}
                alt="play"
                className="h-full w-full  object-cover "
                onClick={() => setvidplay(!videplay)}
              />
            </button>

            <div className="h-full w-[60%] bg-black/50 rounded-full flex gap-2 justify-around items-center overflow-hidden  pl-2 pr-2">
              <img
                src={vol ? volume : mute}
                alt="volume"
                className="size-9 invert object-cover cursor-pointer
              "
                onClick={() => {
                  if (videocontrols.current) {
                    videocontrols.current.muted = !videocontrols.current.muted;
                  }

                  setvol(!vol);
                }}
              />
              <span>{Volumebar}</span>
            </div>

            <button className="h-full w-12 bg-black/50 flex justify-center items-center  rounded-full object-cover cursor-pointer">
              <img
                src={screen ? minimize : fullscreen}
                alt="fullscreen"
                className="size-6 invert object-cover"
                onClick={() => {
                  setscreen(!screen);
                  if (!document.fullscreenElement) {
                    FullscreenRef.current.requestFullscreen();
                  } else {
                    document.exitFullscreen();
                  }
                }}
              />
            </button>
          </div>

          <div className=" h-fit w-full absolute bottom-0 p-4 rounded-xl ">
            <div className="h-13 w-full flex p-2 ">
              <Link className="h-full w-[75%]  p-1 flex  items-center ">
                <img
                  src={cutie}
                  alt="channel-icon"
                  className="size-13 object-cover rounded-full"
                />
                <h2 className="w-[70%]  p-2 text-white font-bold text-sm truncate">
                  Channel Name TitlesChannel Name TitlesChannel Name
                  TitlesChannel Name TitlesChannel Name TitlesChannel Name
                  TitlesChannel Name TitlesChannel Name Titles
                </h2>
              </Link>
              <button className="bg-white rounded-4xl cursor-pointer p-4 font-bold text-sm flex justify-center items-center ">
                Subscribe
              </button>
            </div>

            <div className="h-13 w-full  p-2 text-white font-bold  line-clamp-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              velit rerum natus atque ullam corrupti sequi alias maxime
              inventore pariatur, consequatur, magni officia ab? Suscipit eos
              exercitationem corporis quasi velit? Exercitationem, dolor? Modi
              distinctio porro voluptate, sit id reprehenderit sunt repellat et
              beatae quos molestias iure voluptates cum eligendi rem veritatis.
              Reiciendis sapiente, minima accusantium voluptatum cum commodi
              sint? Assumenda.
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step={0.01}
              value={progress}
              id="slider"
              onChange={(e) => {
                const seekTime =
                  (e.target.value / 100) * videocontrols.current.duration;
                videocontrols.current.currentTime = seekTime;
                setprogress(e.target.value);
              }}
              className="h-1 w-full accent-red-500 cursor-pointer
                          [&::-webkit-slider-thumb]:opacity-0 
                          hover:[&::-webkit-slider-thumb]:opacity-100 
                          [&::-moz-range-thumb]:opacity-0 
                          hover:[&::-moz-range-thumb]:opacity-100"
            />
          </div>
        </div>
        <div className="h-screen pt-25 relative flex  flex-col gap-4 justify-center items-center">
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

          <ul className="h-fit w-80 bg-white rounded-2xl p-1 absolute right-6 bottom-50 z-10 hidden">
            <li className="p-4 rounded-2xl text-center hover:bg-gray-200 ">
              Description
            </li>
            <li className="p-4 rounded-2xl text-center hover:bg-gray-200 ">
              Save to Playlist
            </li>
            <li className="p-4 rounded-2xl text-center hover:bg-gray-200 ">
              Dont recommend this channel
            </li>
            <li className="p-4 rounded-2xl text-center hover:bg-gray-200 ">
              Report
            </li>
            <li className="p-4 rounded-2xl text-center hover:bg-gray-200 ">
              Feedback
            </li>
          </ul>

          <button className={`${btn} `}>
            <span className="flex flex-col gap-1">
              <div className="size-1 bg-black rounded-full"></div>
              <div className="size-1 bg-black rounded-full"></div>
              <div className="size-1 bg-black rounded-full"></div>
            </span>
          </button>
          <div className="size-14 bg-gray-100 p-1 rounded-xl m-1 flex justify-center items-center cursor-pointer hover:bg-gray-300">
            <img
              src={cutie}
              alt="img"
              className="size-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShortsVideo;
