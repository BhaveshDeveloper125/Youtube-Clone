import React from 'react';
import { useParams } from 'react-router-dom';

function PlaylistVideos() {
  const params = useParams();
  return (
    <>
      <h1>Playlist Videos list will display here </h1>
      <h1>{params.playlist}</h1>
      video1 video2 video3 video4
    </>
  );
}

export default PlaylistVideos;
