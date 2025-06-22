import React from "react";
import Context from "../../Context/Context";
import TopMenu from "../../Components/TopMenu/TopMenu";
import SideMenu from "../../Components/SideMenu/SideMenu";
import PlaylistComponent from "../../Components/Playlist/PlaylistComponent";
import Playsection from "../../Components/PlaySection/Playsection";

// Import Images
import goku from "../../assets/Images/1.jpeg";

function Playlist() {
  return (
    <>
      <Context>
        <TopMenu />
        <div className="flex">
          <SideMenu />
          <div
            className=" h-screen w-full p-4 flex-1 grid gap-x-2 gap-y-2  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
           2xl:grid-cols-6 overflow-auto"
          >
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
            />
          </div>
        </div>
      </Context>
    </>
  );
}

export default Playlist;
