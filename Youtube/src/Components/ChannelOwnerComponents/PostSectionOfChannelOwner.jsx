import React from "react";
import Post from "../PostsComponent/Post";

function PostSectionOfChannelOwner() {
  return (
    <>
      <div className="h-fit w-full flex gap-2 flex-col justify-center items-center">
        {[...Array(4)].map((_, i) => (
          <Post key={i} />
        ))}
      </div>
    </>
  );
}

export default PostSectionOfChannelOwner;
