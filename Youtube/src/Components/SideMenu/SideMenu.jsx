import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuData } from '../../Pages/Home/Home';

// Importing the Icons
import home from '../../assets/Icons/home.svg';
import shorts from '../../assets/Icons/short.svg';
import subscribe from '../../assets/Icons/subscribe.svg';
import user from '../../assets/Icons/user.svg';
import history from '../../assets/Icons/history.svg';
import playList from '../../assets/Icons/playlist.svg';
import video from '../../assets/Icons/video.svg';
import watchLater from '../../assets/Icons/clock.svg';
import like from '../../assets/Icons/like.svg';
import list from '../../assets/Icons/list.svg';
import trending from '../../assets/Icons/fire.svg';
import films from '../../assets/Icons/clapperboard.svg';
import live from '../../assets/Icons/live.svg';
import sports from '../../assets/Icons/trophy.svg';
import news from '../../assets/Icons/news.svg';
import settings from '../../assets/Icons/setting.svg';
import flag from '../../assets/Icons/red-flag.svg';
import help from '../../assets/Icons/question.svg';
import feedback from '../../assets/Icons/chat.svg';

// Import Images
import cutie from '../../assets/Images/cute.jpg';

function SideMenu() {
  const { sidebar, setsidebar } = useContext(MenuData);

  const expand =
    'h-181 w-1/8 bg-white duration-0.5s duration-500 sticky top-10 left-0 overflow-auto';
  const shrink =
    'h-181 w-1/30 bg-white duration-0.5s duration-500 sticky top-10 left-0 overflow-auto';

  let expand_menu = 'h-[8%] w-full bg-transparent flex items-center gap-4 p-4 ';
  let shrink_menu =
    'h-[8%] w-full flex justify-center items-center gap-4 pl-0 p-4 rounded-lg cursor-pointer hover:bg-gray-300';

  return (
    <>
      <div className={sidebar ? expand : shrink}>
        <ul className="h-full w-full ">
          <Link to="/">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : `${shrink_menu}`
              }
            >
              <img src={home} alt="History Icon" className="h-full w-10 " />
              <p className={sidebar ? '' : 'hidden'}>Home</p>
            </li>
          </Link>

          <Link to="/shorts">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : `${shrink_menu}`
              }
            >
              <img src={shorts} alt="History Icon" className="h-full w-10 " />
              <p className={sidebar ? '' : 'hidden'}>Shorts</p>
            </li>
          </Link>

          <Link to="/subs">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : `${shrink_menu}`
              }
            >
              <img
                src={subscribe}
                alt="History Icon"
                className="h-full w-10 "
              />
              <p className={sidebar ? '' : 'hidden'}>Subscriptions</p>
            </li>
          </Link>

          <Link to="/You">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : `${shrink_menu}`
              }
            >
              <img src={user} alt="History Icon" className="h-full w-10 " />
              <p className={sidebar ? '' : 'hidden'}>You</p>
            </li>
          </Link>

          <hr className={sidebar ? 'w-[90%]' : 'hidden'} />

          <Link to="/Yoursection">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <p className={sidebar ? '' : 'hidden'}>You &gt;</p>
            </li>
          </Link>

          <Link to="/history">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img src={history} alt="History Icon" className="h-full w-10 " />
              <p className={sidebar ? '' : 'hidden'}>History</p>
            </li>
          </Link>

          <Link to="/playlist">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img src={playList} alt="Playlist Icon" className="h-full w-8 " />
              <p className={sidebar ? '' : 'hidden'}>Playlist</p>
            </li>
          </Link>

          <Link to="/yourvideos">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img src={video} alt="Home Icon" className="h-full w-8 " />
              <p className={sidebar ? '' : 'hidden'}>Your Videos</p>
            </li>
          </Link>

          <Link to="/watchlater">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img
                src={watchLater}
                alt="watchLater Icon"
                className="h-full w-8 "
              />
              <p className={sidebar ? '' : 'hidden'}>Watch Later</p>
            </li>
          </Link>

          <Link to="/likedvideos">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img src={like} alt="liked videos Icon" className="h-full w-8 " />
              <p className={sidebar ? '' : 'hidden'}>Lieked Videos</p>
            </li>
          </Link>

          <hr className={sidebar ? 'w-[90%]' : 'hidden'} />
          <h1 className={sidebar ? 'p-4 font-bold' : 'hidden'}>Subscription</h1>

          <Link to="/channelowner/1">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img
                src={cutie}
                alt="liked videos Icon"
                className="size-8 rounded-full object-cover"
              />
              <p className={sidebar ? 'truncate' : 'hidden'}>
                1The Valley of Music The Valley of Music
              </p>
            </li>
          </Link>

          <Link to="/channelowner/2">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img
                src={cutie}
                alt="liked videos Icon"
                className="size-8 rounded-full object-cover"
              />
              <p className={sidebar ? 'truncate' : 'hidden'}>
                2The Valley of Music The Valley of Music
              </p>
            </li>
          </Link>

          <Link to="/channelowner/3">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img
                src={cutie}
                alt="liked videos Icon"
                className="size-8 rounded-full object-cover"
              />
              <p className={sidebar ? 'truncate' : 'hidden'}>
                3The Valley of Music The Valley of Music
              </p>
            </li>
          </Link>

          <Link to="/channelowner/4">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img
                src={cutie}
                alt="liked videos Icon"
                className="size-8 rounded-full object-cover"
              />
              <p className={sidebar ? 'truncate' : 'hidden'}>
                4The Valley of Music The Valley of Music
              </p>
            </li>
          </Link>

          <Link to="/channelowner/5">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img
                src={cutie}
                alt="liked videos Icon"
                className="size-8 rounded-full object-cover"
              />
              <p className={sidebar ? 'truncate' : 'hidden'}>
                5The Valley of Music The Valley of Music
              </p>
            </li>
          </Link>

          <Link to="/allplaylist">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img
                src={list}
                alt="liked videos Icon"
                className="size-6  object-cover"
              />
              <p className={sidebar ? 'truncate' : 'hidden'}>
                All Subscriptions
              </p>
            </li>
          </Link>

          <hr className={sidebar ? 'w-[90%]' : 'hidden'} />
          <h1 className={sidebar ? 'p-4 font-bold' : 'hidden'}>Explore</h1>
          <Link to="/trending">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img
                src={trending}
                alt="liked videos Icon"
                className="size-6  object-cover"
              />
              <p className={sidebar ? 'truncate' : 'hidden'}>Trending</p>
            </li>
          </Link>

          <Link to="/films">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img
                src={films}
                alt="liked videos Icon"
                className="size-6  object-cover"
              />
              <p className={sidebar ? 'truncate' : 'hidden'}>Films</p>
            </li>
          </Link>

          <Link to="/live">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img
                src={live}
                alt="liked videos Icon"
                className="size-6  object-cover"
              />
              <p className={sidebar ? 'truncate' : 'hidden'}>Live</p>
            </li>
          </Link>

          <Link to="/news">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img
                src={news}
                alt="liked videos Icon"
                className="size-6  object-cover"
              />
              <p className={sidebar ? 'truncate' : 'hidden'}>News</p>
            </li>
          </Link>

          <Link to="/sports">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img
                src={sports}
                alt="liked videos Icon"
                className="size-6  object-cover"
              />
              <p className={sidebar ? 'truncate' : 'hidden'}>Sports</p>
            </li>
          </Link>

          <hr className={sidebar ? 'w-[90%]' : 'hidden'} />
          <Link to="/settings">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img
                src={settings}
                alt="liked videos Icon"
                className="size-6  object-cover"
              />
              <p className={sidebar ? 'truncate' : 'hidden'}>Settings</p>
            </li>
          </Link>

          <Link to="/reporthistory">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img
                src={flag}
                alt="liked videos Icon"
                className="size-6  object-cover"
              />
              <p className={sidebar ? 'truncate' : 'hidden'}>Report History</p>
            </li>
          </Link>

          <Link to="/help">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img
                src={help}
                alt="liked videos Icon"
                className="size-6  object-cover"
              />
              <p className={sidebar ? 'truncate' : 'hidden'}>Help</p>
            </li>
          </Link>

          <Link to="/feedback">
            <li
              className={
                sidebar
                  ? `${expand_menu}  cursor-pointer hover:bg-gray-300`
                  : 'hidden'
              }
            >
              <img
                src={feedback}
                alt="liked videos Icon"
                className="size-6  object-cover"
              />
              <p className={sidebar ? 'truncate' : 'hidden'}>Feedback</p>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default SideMenu;
