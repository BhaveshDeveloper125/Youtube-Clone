import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import Pages

import Home from './Pages/Home/Home.jsx';
import Shorts from './Pages/Shorts/Shorts.jsx';
import Subscription from './Pages/Subscription/Subscription.jsx';
import You from './Pages/You/You.jsx';
import YourSection from './Pages/YouSection/YourSection.jsx';
import History from './Pages/History/History.jsx';
import Playlist from './Pages/PlayList/Playlist.jsx';
import YourVideos from './Pages/YourVideos/YourVideos.jsx';
import WatchLater from './Pages/WatchLater/WatchLater.jsx';
import LikedVideos from './Pages/LikedVideos/LikedVideos.jsx';
import ChannelOwner from './Pages/ChannelOwner/ChannelOwner.jsx';
import AllPlaylist from './Pages/AllPlaylist/AllPlaylist.jsx';
import Trending from './Pages/Trending/Trending.jsx';
import Films from './Pages/Films/Films.jsx';
import Live from './Pages/Live/Live.jsx';
import News from './Pages/News/News.jsx';
import Sports from './Pages/Sports/Sports.jsx';
import Settings from './Pages/Settings/Settings.jsx';
import ReportHistory from './Pages/ReportHistory/ReportHistory.jsx';
import Help from './Pages/Help/Help.jsx';
import Feedback from './Pages/FeedBack/Feedback.jsx';
import SwitchAccount from './Pages/TopMenuUserMenu/SwitchAccount/SwitchAccount.jsx';
import CreaterStudioDashboard from './Pages/TopMenuUserMenu/CreaterStudioDashboard/CreaterStudioDashboard.jsx';
import YourDataInYoutube from './Pages/TopMenuUserMenu/YourDataInYoutube/YourDataInYoutube.jsx';
import Restriction from './Pages/TopMenuUserMenu/Restrictions/Restriction.jsx';
import TopMenuSettings from './Pages/TopMenuUserMenu/Settings/Settings.jsx';
import TopMenuHelp from './Pages/TopMenuUserMenu/Help/Help.jsx';
import TopMenuFeedback from './Pages/TopMenuUserMenu/Feedback/Feedback.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/shorts',
    element: <Shorts />,
  },

  {
    path: '/subs',
    element: <Subscription />,
  },

  {
    path: '/You',
    element: <You />,
  },

  {
    path: '/Yoursection',
    element: <YourSection />,
  },

  {
    path: '/history',
    element: <History />,
  },

  {
    path: '/playlist',
    element: <Playlist />,
  },

  {
    path: '/yourvideos',
    element: <YourVideos />,
  },

  {
    path: '/watchlater',
    element: <WatchLater />,
  },

  {
    path: '/likedvideos',
    element: <LikedVideos />,
  },

  {
    path: '/channelowner/:id',
    element: <ChannelOwner />,
  },

  {
    path: '/allplaylist',
    element: <AllPlaylist />,
  },

  {
    path: '/trending',
    element: <Trending />,
  },

  {
    path: '/films',
    element: <Films />,
  },

  {
    path: '/live',
    element: <Live />,
  },

  {
    path: '/news',
    element: <News />,
  },

  {
    path: '/sports',
    element: <Sports />,
  },

  {
    path: '/settings',
    element: <Settings />,
  },

  {
    path: '/reporthistory',
    element: <ReportHistory />,
  },

  {
    path: '/help',
    element: <Help />,
  },

  {
    path: '/feedback',
    element: <Feedback />,
  },

  {
    path: '/switchAccount',
    element: <SwitchAccount />,
  },

  {
    path: '/createrStudio/:ownerID',
    element: <CreaterStudioDashboard />,
  },

  {
    path: '/yourdatainyoutube',
    element: <YourDataInYoutube />,
  },

  {
    path: '/restriction',
    element: <Restriction />,
  },

  {
    path: '/topSettings',
    element: <TopMenuSettings />,
  },

  {
    path: '/topHelp',
    element: <TopMenuHelp />,
  },

  {
    path: '/topfeedback',
    element: <TopMenuFeedback />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
