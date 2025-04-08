import React from 'react';
import { useParams } from 'react-router-dom';

function CreaterStudioDashboard() {
  const params = useParams();
  return (
    <>
      <h1>Creater Studio Dashboard {params.ownerID} </h1>
    </>
  );
}

export default CreaterStudioDashboard;
