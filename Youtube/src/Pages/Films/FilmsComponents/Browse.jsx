import React from "react";
import FilmCard from "../../../Components/FilmComponents/FilmCard";

function Browse() {
  return (
    <>
      <div className="flex-1 bg-red-500 p-2 grid gap-2 grid-cols-6  ">
        {[...Array(10)].map((_, i) => (
          <FilmCard />
        ))}
      </div>
    </>
  );
}

export default Browse;
