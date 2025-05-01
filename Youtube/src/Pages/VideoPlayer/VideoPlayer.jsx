import React from 'react';
import { useParams } from 'react-router-dom';

function VideoPlayer() {
  const params = useParams();
  return (
    <>
      <h1>Video Player {params.list} </h1>
    </>
  );
}

export default VideoPlayer;
