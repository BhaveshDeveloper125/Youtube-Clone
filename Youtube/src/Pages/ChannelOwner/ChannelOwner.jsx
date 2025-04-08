import React from 'react';
import { useParams } from 'react-router-dom';

function ChannelOwner() {
  const params = useParams();
  return (
    <>
      <h1>Channel Owner Pager {params.id}</h1>
    </>
  );
}

export default ChannelOwner;
