import React, { useState } from "react";
import { Link, Links } from "react-router-dom";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

// Importing images
import cutie from "../../assets/Images/1.jpeg";
import five from "../../assets/Images/5.jpg";
import cute from "../../assets/Images/cute.jpg";
import rengoku from "../../assets/Images/rengoku.jpg";

function Post() {
  const [like, setlike] = useState(false);
  const [dislike, setdislike] = useState(false);
  const [report, setreport] = useState(false);
  const [readmore, setreadmore] = useState(false);

  const images = [cutie, five, cute, rengoku];

  return (
    <>
      <div className="h-fit w-1/2 bg-gray-100 border border-black rounded-xl p-4 m-4 cursor-pointer">
        <div className="h-fit w-full flex gap-0.5">
          <img
            src={cutie}
            alt="channel-logo"
            className="size-10 rounded-full object-cover"
          />
          <div className="w-[95%] p-1 text-xl font-semibold truncate">
            channel name qwertyuiopasdfghjklzxcvbnm, Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minima iusto perspiciatis ducimus,
            accusantium sit voluptatem ullam eveniet velit. At quidem eum nemo
            quibusdam, nesciunt quas illum sapiente rem vel ea!
          </div>
          <div className="text-center">1 year</div>
          <button
            onClick={() => setreport(!report)}
            className=" hover:bg-gray-200 active:bg-gray-400 rounded-xl p-2 relative flex flex-col gap-2 justify-center items-center cursor-pointer"
          >
            <div className="size-[4px] bg-black rounded-full"></div>
            <div className="size-[4px] bg-black rounded-full"></div>
            <div className="size-[4px] bg-black rounded-full"></div>
            {report ? (
              <div className=" bg-white hover:bg-gray-200 shadow-2xl shadow-black rounded-2xl p-3 pl-4 pr-4 absolute top-5 right-8 flex gap-2 justify-center items-center">
                <i className="fas fa-flag" /> <div>Report</div>
              </div>
            ) : null}
          </button>
        </div>
        <div className="h-fit w-full flex flex-col gap-3 ">
          <p className={readmore ? `h-fit` : `line-clamp-4`}>
            perspiciatis dolores, praesentium rerum quia cumque pariatur? Ipsa
            possimus corporis, deleniti odit accusantium excepturi porro minima
            vel quod nam ab amet! Qui rem cumque, molestiae et quis dolores
            blanditiis sed odit reprehenderit sint facere non, harum reiciendis
            quisquam autem laboriosam distinctio similique? Dicta, corporis.
            Cumque itaque nam adipisci consequatur fuga expedita! Rerum nostrum
            nihil laborum. Veniam atque necessitatibus a illo modi ipsam? Quas
            officia laudantium fugiat tempora magnam tempore sit ipsum porro
            asperiores? Voluptate sunt ipsa, iure hic harum blanditiis
            assumenda! Cupiditate alias tempora rerum dicta non accusantium ab
            ratione vitae debitis repudiandae quae dolorem in nisi, perspiciatis
            tenetur molestiae voluptas eligendi aliquid! Culpa sed optio
            consectetur rerum, distinctio consequatur. Consequuntur.
          </p>

          {readmore ? (
            <button
              onClick={() => setreadmore(!readmore)}
              className="w-fit p-2 cursor-pointer font-bold text-gray-600 hover:text-gray-400"
            >
              Read less
            </button>
          ) : (
            <button
              onClick={() => setreadmore(!readmore)}
              className="w-fit p-2 cursor-pointer font-bold text-gray-600 hover:text-gray-400"
            >
              Read more
            </button>
          )}

          <div className="h-fit w-full">
            {/* <div
              className={`flex relative transition-transform duration-500 overflow-hidden translate-x-${CurrentImage}`}
            >
              <img
                src={cutie}
                alt="image"
                className=" h-full w-full rounded-2xl object-cover "
              />{" "}
              <img
                src={cutie}
                alt="image"
                className=" h-full w-full rounded-2xl object-cover "
              />{" "}
              <img
                src={cutie}
                alt="image"
                className=" h-full w-full rounded-2xl object-cover "
              />{" "}
              <img
                src={cutie}
                alt="image"
                className=" h-full w-full rounded-2xl object-cover "
              />
              <div className="h-full w-full text-2xl absolute top-0 flex justify-between items-center">
                <button
                  onClick={() => {
                    CurrentImage++;
                  }}
                  className="size-fit bg-white rounded-full p-1 text-xl text-black cursor-pointer"
                >
                  <i className="fas fa-arrow-left"></i>
                </button>
                <button
                  onClick={() => {
                    CurrentImage--;
                  }}
                  className="size-fit bg-white rounded-full p-1 text-xl text-black cursor-pointer"
                >
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div> */}
            <ImageCarousel img={images} />
          </div>
          <div className="h-fit w-full p-2 flex gap-2">
            <div>
              <i
                onClick={() => {
                  setlike(!like);
                  dislike ? setdislike(false) : null;
                }}
                style={{ WebkitTextStroke: "1px black" }}
                className={
                  like
                    ? ` hover:bg-gray-400 rounded-full fas fa-thumbs-up p-2 text-black text-xl`
                    : " hover:bg-gray-400 rounded-full fas fa-thumbs-up p-2 text-transparent text-xl"
                }
              />
            </div>
            1M likes
            <div>
              <i
                onClick={() => {
                  setdislike(!dislike);
                  like ? setlike(false) : null;
                }}
                style={{ "-webkit-text-stroke": "1px black" }}
                className={
                  dislike
                    ? ` hover:bg-gray-400 rounded-full fas fa-thumbs-up text-black p-2 text-xl rotate-180`
                    : " hover:bg-gray-400 rounded-full fas fa-thumbs-up text-transparent p-2 text-xl rotate-180"
                }
              />
            </div>
            <i
              style={{ "-webkit-text-stroke": "1px black" }}
              className="fas fa-share hover:bg-gray-400 rounded-full text-xl text-transparent p-2"
            />
            <Link
              to="/channelownerPost/12"
              className="hover:bg-gray-400 rounded-full pl-1 pr-2"
            >
              <i
                style={{ "-webkit-text-stroke": "1px black" }}
                className="fas fa-comment rounded-full text-xl text-transparent p-2"
              />
              <span>1M</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
