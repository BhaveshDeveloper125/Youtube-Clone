import React from "react";
import { Link } from "react-router-dom";

// Import Icons
import playlist from "../../assets/Icons/playlist.svg";
import play from "../../assets/Icons/play.png";

// Import Images
import cutie from "../../assets/Images/1.jpeg";

function PlaylistComponent(prop) {
  let hovereffect =
    " h-53 w-full bg-black/50 rounded-2xl flex justify-center items-center p-1 absolute top-0";
  return (
    <>
      <div className="size-100 shadow-black-800 shadow-2xl rounded-xl text-center flex flex-col justify-center items-center relative hover:shadow-xl group">
        <img
          src={prop.img}
          alt="playlist thumbnail"
          className="h-1.5 w-65 rounded-xl blur-[1px] opacity-100 object-cover"
        />
        <img
          src={prop.img}
          alt="playlist thumbnail"
          className="h-1.5 w-75 rounded-xl blur-[1px] opacity-100 object-cover"
        />
        <img
          src={prop.img}
          alt="playlist thumbnail"
          className="h-50 w-130 rounded-xl object-cover"
        />
        <span className="h-5 w-32 bg-black/50 rounded-sm flex justify-center items-center gap-2 absolute bottom-25 right-2 p-2">
          <img src={playlist} alt="playlist" className="size-4 invert" />
          <span className="invert">100 videos</span>
        </span>
        <Link
          to={`/playlistPlayer/${prop.lnk}`}
          className={`hidden  ${hovereffect}  group-hover:flex`}
        >
          <div className="p-1 flex justify-center items-center gap-2 invert">
            <img src={play} alt="play" className="size-8" />
            <span>Play all</span>
          </div>
        </Link>
        <Link
          to={`/playlistPlayer/${prop.lnk}`}
          className="h-fit w-85  line-clamp-2"
        >
          Video Title : Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Quam doloribus omnis vero illum maxime molestiae amet aperiam
          esse assumenda animi. Expedita mollitia consectetur illum ad
          dignissimos tenetur placeat alias. Eligendi.
        </Link>

        <Link
          to="/user/the valley of music"
          className="h-fit w-85 text-gray-400 truncate"
        >
          Channel Name : Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Quam doloribus omnis vero illum maxime molestiae amet aperiam
          esse assumenda animi. Expedita mollitia consectetur illum ad
          dignissimos tenetur placeat alias. Eligendi.
        </Link>

        <Link
          to={`/playlists/${prop.plink}`}
          className="h-fit w-85 line-clamp-2"
        >
          View Playlist
        </Link>
      </div>
    </>
  );
}

export default PlaylistComponent;
