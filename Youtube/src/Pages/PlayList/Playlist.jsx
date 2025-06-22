import React from "react";
import Context from "../../Context/Context";
import TopMenu from "../../Components/TopMenu/TopMenu";
import SideMenu from "../../Components/SideMenu/SideMenu";
import PlaylistComponent from "../../Components/Playlist/PlaylistComponent";
import Playsection from "../../Components/PlaySection/Playsection";

// Import Images
import goku from "../../assets/Images/5.jpg";

function Playlist() {
  return (
    <>
      <Context>
        <TopMenu />
        <div className="flex">
          <SideMenu />
          {/* <div className="bg-green-500 flex-1 grid gap-2 justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Playsection />
            <Playsection />
            <Playsection />
            <Playsection />
            <Playsection />
            <Playsection />
            <Playsection />
          </div> */}

          {/* <section class="   flex-1 p-8 transition-all duration-300 ease-in-out ">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
              <div class="h-50 w-full bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                hello
              </div>

              <div class="h-50 w-full bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                hello
              </div>

              <div class="h-50 w-full bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                hello
              </div>

              <div class="h-50 w-full bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                hello
              </div>
              <div class="h-50 w-full bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                hello
              </div>

              <div class="h-50 w-full bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                hello
              </div>

              <div class="h-50 w-full bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                hello
              </div>

              <div class="h-50 w-full bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                hello
              </div>
              <div class="h-50 w-full bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                hello
              </div>

              <div class="h-50 w-full bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                hello
              </div>

              <div class="h-50 w-full bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                hello
              </div>

              <div class="h-50 w-full bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                hello
              </div>
            </div>
          </section> */}
          <div
            className=" flex-1 bg-red-500 grid row-gap-1 gap-x-3 grid-cols-1 sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 xl:grid-col-5
           2xl:grid-cols-6"
          >
            <Playsection />
            <Playsection />
            <Playsection />
            <Playsection />
            <Playsection />
            <Playsection />
            <Playsection />
          </div>
        </div>
      </Context>
    </>
  );
}

export default Playlist;
