import React from 'react';
import { useParams } from 'react-router-dom';

function AllPlaylist() {
  const params = useParams();
  return (
    <>
      <h1> {params.allplay} </h1>
      <h1> Your all Playlist Section</h1>
    </>
  );
}

export default AllPlaylist;
