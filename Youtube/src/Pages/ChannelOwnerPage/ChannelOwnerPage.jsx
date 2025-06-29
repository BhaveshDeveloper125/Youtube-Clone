import React from "react";
import { useParams } from "react-router-dom";

function ChannelOwnerPage() {
  const params = useParams();

  return (
    <>
      <h1>{params.id}</h1>
      <h1>Channel Owner Page </h1>
    </>
  );
}

export default ChannelOwnerPage;
