import React from "react";
import Post from "../../Components/PostsComponent/Post";
import { useParams } from "react-router-dom";

function DisplayPost() {
  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <Post />
        <div className="w-full bg-red-500">asdasdadss</div>
      </div>
    </>
  );
}

export default DisplayPost;
