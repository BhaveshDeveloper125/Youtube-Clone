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
              lnk={1}
              plink={1}
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
              lnk={2}
              plink={2}
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
              lnk={3}
              plink={1}
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
              lnk={4}
              plnk={4}
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
              lnk={5}
              plnk={5}
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
              lnk={6}
              plnk={6}
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
              lnk={7}
              plnk={7}
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
              lnk={8}
              plnk={8}
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
              lnk={9}
              plnk={9}
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
              lnk={10}
              plnk={10}
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
              lnk={11}
              plnk={11}
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
              lnk={12}
              plnk={12}
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
              lnk={13}
              plnk={13}
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
              lnk={14}
              plnk={14}
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
              lnk={15}
              plnk={15}
            />
            <Playsection
              img={goku}
              title="This is the title ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deleniti explicabo quam. Repellat cumque possimus, aperiam illum dicta tempora sequi excepturi amet impedit iusto sint molestias alias nemo praesentium officia."
              channelName="Channel Title : This is the channel title"
              lnk={16}
              plnk={16}
            />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </Context>
    </>
  );
}

export default Playlist;
