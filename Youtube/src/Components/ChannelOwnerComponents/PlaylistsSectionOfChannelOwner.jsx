import React from "react";
import PlaySection from "../../Components/PlaySection/Playsection";

// import images
import goku from "../../assets/Images/5.jpg";

function PlaylistsSectionOfChannelOwner() {
  return (
    <>
      <div className="grid gap-1 grid-cols-4">
        {[...Array(4)].map((i) => (
          <PlaySection
            key={i}
            img={goku}
            title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
            channelName="Channel Title : This is the channel title"
            lnk={1}
            plink={1}
          />
        ))}
      </div>
    </>
  );
}

export default PlaylistsSectionOfChannelOwner;
