import React, { useContext, useState } from 'react';
import { Menudata } from '../../Context/Context';
import { Link } from 'react-router-dom';

// Import Icons
import YouTUbe from '../../assets/Icons/YouTube.png';
import mic from '../../assets/Icons/mic.svg';
import Upload from '../../assets/Icons/upload.svg';
import Live from '../../assets/Icons/live.svg';
import post from '../../assets/Icons/post.svg';
import SA from '../../assets/Icons/switch-account.svg';
import setting from '../../assets/Icons/setting.svg';
import crStudio from '../../assets/Icons/menu.svg';
import YourData from '../../assets/Icons/file.svg';
import DarkTheme from '../../assets/Icons/night-mode.svg';
import Restriction from '../../assets/Icons/secure-access.svg';
import help from '../../assets/Icons/support.svg';
import feedback from '../../assets/Icons/review.svg';
import bell from '../../assets/Icons/bell.svg';

// Import Images
import cutie from '../../assets/Images/cute.jpg';

function TopMenu() {
  const [menuexpand, setmenuexpand] = useState(false);
  const [uploadToggle, setuploadToggle] = useState(false);
  const [ToggleNotification, setToggleNotification] = useState(false);
  const [ToggleUserMenu, setToggleUserMenu] = useState(false);
  const { menu, setmenu } = useContext(Menudata);

  let li_hover = 'hover:bg-gray-300 cursor-pointer flex items-center gap-2 p-4';
  let li_img = 'size-8';

  let showToggle = 'h-fit w-fit bg-white p-4 rounded-lg absolute shadow-black';
  let hideToggle = 'hidden';

  let ShowNotification =
    'h-fit max-h-[80vh] w-[35vw] bg-white p-1 rounded-lg absolute right-0 top-12 overflow-auto  shadow-black';
  let HideNotification = 'hidden';

  let ShowUserMenu =
    'h-fit w-80 bg-white p-1 rounded-lg absolute right-0 top-12  shadow-black';
  let HideUserMenu = 'hidden';

  return (
    <>
      <div className="h-12 w-full bg-white flex  sticky top-0">
        <button
          onClick={() => setmenu(!menu)}
          className="h-full w-12  flex flex-col justify-center items-center rounded-full cursor-pointer hover:bg-gray-200"
        >
          <div className="h-1 w-[50%] bg-black mt-1"></div>
          <div className="h-1 w-[50%] bg-black mt-1"></div>
          <div className="h-1 w-[50%] bg-black mt-1"></div>
        </button>

        <Link to="/">
          <img
            src={YouTUbe}
            alt="youtube icon"
            className="h-full w-[8rem] object-cover"
          />
        </Link>

        <span className="h-full w-[70%] flex justify-center items-center ">
          <form
            action=""
            className="h-full w-[60%]  border-black flex justify-between p-2"
          >
            <input
              type="search"
              placeholder="Search"
              className=" border-black flex-grow rounded-xl focus:outline-none"
              style={{ border: '1px solid gray' }}
            />
            <button className="h-full w-[10%] flex justify-center items-center rounded-full">
              <img src={mic} alt="Speaker" className="h-12 w-12 object-cover" />
            </button>
          </form>
        </span>

        <div className=" flex-1 flex justify-center items-center p-1 gap-4 z-50">
          <span className="">
            <button
              onClick={() => {
                setuploadToggle(!uploadToggle);
                if (ToggleNotification) {
                  setToggleNotification(!ToggleNotification);
                }
                if (ToggleUserMenu) {
                  setToggleUserMenu(!ToggleUserMenu);
                }
              }}
              className="h-full w-full bg-gray-200 cursor-pointer rounded-xl flex justify-center items-center p-2 hover:bg-gray-400"
            >
              + Create
            </button>
            <div
              style={{ boxShadow: '0px 0px 10px 2px black' }}
              className={uploadToggle ? showToggle : hideToggle}
            >
              <div className="flex items-center p-2 gap-4 hover:bg-gray-200 cursor-pointer">
                <img src={Upload} alt="Upload" className="h-[10%] w-[10%]" />{' '}
                Upload Video
              </div>

              <div className="flex items-center p-2 gap-4 hover:bg-gray-200 cursor-pointer">
                <img src={Live} alt="Upload" className="h-[10%] w-[10%]" />
                Go Live
              </div>

              <div className="flex items-center p-2 gap-4 hover:bg-gray-200 cursor-pointer">
                <img src={post} alt="Upload" className="h-[10%] w-[10%]" />{' '}
                Create Post
              </div>
            </div>
          </span>

          <span className="relative">
            <img
              src={bell}
              alt="Notification"
              onClick={() => {
                setToggleNotification(!ToggleNotification);
                if (uploadToggle) {
                  setuploadToggle(!uploadToggle);
                }

                if (ToggleUserMenu) {
                  setToggleUserMenu(!ToggleUserMenu);
                }
              }}
              className="h-10 w-10 p-[1px] bg-gray-200 rounded-full hover:bg-gray-400 cursor-pointer"
            />

            <div
              style={{
                boxShadow: '0px 0px 10px 2px black',
              }}
              className={
                ToggleNotification ? ShowNotification : HideNotification
              }
            >
              <div className="flex items-center p-2 gap-8 hover:bg-gray-200 cursor-pointer">
                <img
                  src={cutie}
                  alt="Logo"
                  className="h-[4rem] w-[4rem] object-cover rounded-full"
                />
                <div className="h-[4.9rem] w-[50%]  overflow-hidden">
                  The Valley Of Music Uploaded : ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </div>
                <img
                  src={cutie}
                  alt="Thumbnail"
                  className="h-[4rem] w-[6rem] object-cover"
                />
                <span className="h-10 w-5 rounded-full flex flex-col justify-center items-center gap-1 space-y-0 hover:bg-gray-400">
                  <div className="min-h-[4px] min-w-[4px] bg-black rounded-full "></div>
                  <div className="min-h-[4px] min-w-[4px] bg-black rounded-full "></div>
                  <div className="min-h-[4px] min-w-[4px] bg-black rounded-full "></div>
                </span>
              </div>

              <div className="flex items-center p-2 gap-8 hover:bg-gray-200 cursor-pointer">
                <img
                  src={cutie}
                  alt="Logo"
                  className="h-[4rem] w-[4rem] object-cover rounded-full"
                />
                <div className="h-[5rem] w-[50%]  overflow-hidden">
                  The Valley Of Music Uploaded : ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </div>
                <img
                  src={cutie}
                  alt="Thumbnail"
                  className="h-[4rem] w-[6rem] object-cover"
                />
                <span className="h-10 w-5 rounded-full flex flex-col justify-center items-center gap-1 space-y-0 hover:bg-gray-400">
                  <div className="min-h-[4px] min-w-[4px] bg-black rounded-full "></div>
                  <div className="min-h-[4px] min-w-[4px] bg-black rounded-full "></div>
                  <div className="min-h-[4px] min-w-[4px] bg-black rounded-full "></div>
                </span>
              </div>
            </div>
          </span>

          <span className="relative">
            <img
              src={cutie}
              alt="Notification"
              onClick={() => {
                setToggleUserMenu(!ToggleUserMenu);
                if (uploadToggle) {
                  setuploadToggle(!uploadToggle);
                }

                if (ToggleNotification) {
                  setToggleNotification(!ToggleNotification);
                }
              }}
              className="h-10 w-10 p-[1px] bg-gray-200 object-cover rounded-full hover:bg-gray-400 cursor-pointer"
            />
            <div
              style={{ boxShadow: '0px 0px 10px 2px black' }}
              className={ToggleUserMenu ? ShowUserMenu : HideUserMenu}
            >
              <div className="h-20 w-full flex">
                <img
                  src={cutie}
                  alt="Profile Image"
                  className="h-20 w-20 object-cover rounded-full p-2"
                />
                <div className="flex flex-col flex-1 p-4">
                  <h4>Bhavesh Jadav</h4>
                  <h4>@bhavesh123</h4>
                  <a href="#" className="text-blue-800">
                    View Your Channel
                  </a>
                </div>
              </div>

              <br />
              <hr />
              <ul className="flex flex-col flex-1 gap-1 ">
                <Link to="/switchAccount">
                  <li className={li_hover}>
                    <img src={SA} alt="switch account" className={li_img} />
                    <h5>Switch Accounts</h5>
                  </li>
                </Link>
                <Link to="/createrStudio/:100">
                  <li className={li_hover}>
                    <img
                      src={crStudio}
                      alt="switch account"
                      className={li_img}
                    />
                    <h5>Creater Studio Dashboard</h5>
                  </li>
                </Link>
                <Link to="/yourdatainyoutube">
                  <li className={li_hover}>
                    <img
                      src={YourData}
                      alt="switch account"
                      className={li_img}
                    />
                    <h5>Your Data in Youtube</h5>
                  </li>
                </Link>
                <li className={li_hover}>
                  <img
                    src={DarkTheme}
                    alt="switch account"
                    className={li_img}
                  />
                  <h5>Darktheme</h5>
                </li>
                <Link to="/restriction">
                  <li className={li_hover}>
                    <img
                      src={Restriction}
                      alt="switch account"
                      className={li_img}
                    />
                    <h5>Restrictions</h5>
                  </li>
                </Link>
                <hr />
                <Link to="/topSettings">
                  <li className={li_hover}>
                    <img
                      src={setting}
                      alt="switch account"
                      className={li_img}
                    />
                    <h5>Settings</h5>
                  </li>
                </Link>
                <hr />
                <Link to="/topHelp">
                  <li className={li_hover}>
                    <img src={help} alt="switch account" className={li_img} />
                    <h5>Help</h5>
                  </li>
                </Link>
                <Link to="/topfeedback">
                  <li className={li_hover}>
                    <img
                      src={feedback}
                      alt="switch account"
                      className={li_img}
                    />
                    <h5>FeedBack</h5>
                  </li>
                </Link>
                <hr />
                {/* <Link> */}
                <li className="hover:bg-gray-300 cursor-pointer  gap-2 text-red-800 text-center p-4 flex justify-center items-center">
                  <span>Sign out</span>
                </li>
                {/* </Link> */}
              </ul>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

export default TopMenu;
