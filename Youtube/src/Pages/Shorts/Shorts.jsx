import React, { useRef, useState } from 'react';
import TopMenu from '../../Components/TopMenu/TopMenu';
import SideMenu from '../../Components/SideMenu/SideMenu';
import Context from '../../Context/Context';
import ShortsVideo from '../../Components/ShortsVideo/ShortsVideo';
import Comments from '../../Components/Comments/Comments';

// Importing Images
import cutie from '../../assets/Images/cute.jpg';

// Importing Icons
import arrow from '../../assets/Icons/up_arrow.svg';
import cross from '../../assets/Icons/close.svg';
import sorting from '../../assets/Icons/sort.svg';

// Importing Videos
import a from '../../assets/Videos/s1.mp4';
import b from '../../assets/Videos/s2.mp4';
import c from '../../assets/Videos/s3.mp4';
import d from '../../assets/Videos/s4.mp4';
import e from '../../assets/Videos/s5.mp4';

function Shorts() {
  const [shortsMenu, setshortsMenu] = useState(false);
  const [comment, setcomment] = useState(false);
  const [description, setdescription] = useState(false);
  const [sortcomment, setsortcomment] = useState(false);

  const containerref = useRef(null);

  return (
    <>
      <Context>
        <TopMenu />
        <div className="flex">
          <SideMenu />
          <div className="flex flex-1  justify-center items-center">
            {/* shorts */}
            <div
              ref={containerref}
              className="h-screen w-1/3 overflow-y-auto [&::-webkit-scrollbar]:hidden scroll-smooth snap-y snap-mandatory"
            >
              <div className="h-screen snap-start">
                <ShortsVideo
                  v={a}
                  shortsMenu={shortsMenu}
                  setshortsMenu={setshortsMenu}
                  comment={comment}
                  setcomment={setcomment}
                  description={description}
                  setdescription={setdescription}
                />
              </div>
              <div className="h-screen snap-start">
                <ShortsVideo
                  v={b}
                  shortsMenu={shortsMenu}
                  setshortsMenu={setshortsMenu}
                  comment={comment}
                  setcomment={setcomment}
                  description={description}
                  setdescription={setdescription}
                />
              </div>
              <div className="h-screen snap-start">
                <ShortsVideo
                  v={c}
                  shortsMenu={shortsMenu}
                  setshortsMenu={setshortsMenu}
                  comment={comment}
                  setcomment={setcomment}
                  description={description}
                  setdescription={setdescription}
                />
              </div>
              <div className="h-screen snap-start">
                <ShortsVideo
                  v={d}
                  shortsMenu={shortsMenu}
                  setshortsMenu={setshortsMenu}
                  comment={comment}
                  setcomment={setcomment}
                  description={description}
                  setdescription={setdescription}
                />
              </div>
              <div className="h-screen snap-start">
                <ShortsVideo
                  v={e}
                  shortsMenu={shortsMenu}
                  setshortsMenu={setshortsMenu}
                  comment={comment}
                  setcomment={setcomment}
                  description={description}
                  setdescription={setdescription}
                />
              </div>
            </div>
            {/* shorts */}
            <div className="flex  flex-col ">
              <button
                onClick={() => {
                  if (containerref.current) {
                    setcomment(false);
                    setdescription(false);
                    containerref.current.scrollBy({
                      top: -window.innerHeight,
                      behaviour: 'auto',
                    });
                  }
                }}
                className="bg-gray-100 cursor-pointer rounded-full p-2 hover:bg-gray-200 active:bg-gray-300"
              >
                <img src={arrow} alt="up" className="size-8" />
              </button>
              <br />
              <button
                onClick={() => {
                  if (containerref.current) {
                    setcomment(false);
                    setdescription(false);
                    containerref.current.scrollBy({
                      top: window.innerHeight,
                      behaviour: 'auto',
                    });
                  }
                }}
                className="bg-gray-100 cursor-pointer rounded-full p-2 hover:bg-gray-200 active:bg-gray-300"
              >
                <img src={arrow} alt="up" className="size-8 rotate-180" />
              </button>
            </div>
            <div
              className={
                comment
                  ? 'h-150 w-100 border  border-gray-400 rounded-2xl overflow-auto [&::-webkit-scrollbar]:hidden p-1 transition duration-1000 '
                  : ' hidden w-0 transition duration-1000'
              }
            >
              <div className="h-12 w-full bg-white border-b border-black sticky top-0  flex  ">
                <h1 className="text-xl font-bold  p-2">comments</h1>
                <h1 className=" p-2">100</h1>
                <div className="flex flex-1 p-1"></div>

                <div className="w-20 flex flex-col  p-2 justify-center items-center relative cursor-pointer ">
                  <img
                    src={sorting}
                    alt="sort"
                    onClick={() => setsortcomment(!sortcomment)}
                    className="h-8 p-2 rounded-md flex justify-center items-center
                     active:bg-gray-200"
                  />
                  <div
                    className={
                      sortcomment
                        ? 'h-fit w-40 border border-gray-200 rounded-2xl p-1 absolute top-10 right-8 '
                        : 'hidden'
                    }
                  >
                    <ul className="size-full bg-white">
                      <li className="h-[50%] w-full bg-gray-300 rounded-xl p-2 text-center hover:bg-gray-100">
                        Top Comments
                      </li>
                      <li className="h-[50%] w-full rounded-xl p-2 text-center hover:bg-gray-100">
                        Newest First
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => setcomment(!comment)}
                  className="cursor-pointer"
                >
                  <img src={cross} alt="close" className="size-6" />
                </button>
                <hr />
              </div>
              <div>
                <Comments />
                <Comments />
                <Comments />
                <Comments />
              </div>
              <div className="h-12 w-full bg-white border-b border-black sticky bottom-0  flex  "></div>
            </div>

            <div
              className={
                description
                  ? 'h-150 w-100 border  border-gray-400 rounded-2xl overflow-auto [&::-webkit-scrollbar]:hidden p-1 transition duration-1000'
                  : 'hidden w-0 transition duration-1000'
              }
            >
              <div className=" flex bg-white border border-t-transparent border-l-transparent border-r-transparent sticky top-0 border-b-gray-500 justify-between p-2 ">
                <h1 className="text-2xl font-bold">Description</h1>
                <button
                  onClick={() => setdescription(!description)}
                  className="cursor-pointer"
                >
                  <img src={cross} alt="close" className="size-6" />
                </button>
              </div>
              <div className="  border border-t-transparent border-l-transparent border-r-transparent border-b-gray-500 text-justify mt-2 pl-4 pr-4">
                video title video title video title video title video title
                video title video title video title Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Vitae iusto aperiam molestias ab,
              </div>
              <div className=" h-fit w-full flex ">
                <div className=" h-20 w-1/3 flex justify-center items-center ">
                  <span className="flex flex-col justify-center items-center">
                    <span className="text-xl font-semibold">1M</span>
                    <span className="text-gray-500">likes</span>
                  </span>
                </div>
                <div className=" h-20 w-1/3 flex justify-center items-center ">
                  <span className="flex flex-col justify-center items-center">
                    <span className="text-xl font-semibold">1M</span>
                    <span className="text-gray-500">views</span>
                  </span>
                </div>
                <div className=" h-20 w-1/3 flex justify-center items-center ">
                  <span className="flex flex-col justify-center items-center">
                    <span className="text-xl font-semibold">1 Jan</span>
                    <span className="text-gray-500">2025</span>
                  </span>
                </div>
              </div>

              <div className="min-h-2 max-h-100 bg-gray-300 text-justify overflow-auto [&::-webkit-scrollbar]:hidden rounded-2xl cursor-pointer p-4 hover:bg-gray-200">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam mollitia, porro modi nesciunt, vero assumenda
                perspiciatis soluta ex quaerat accusantium odit tempore aliquid
                praesentium possimus temporibus dolores at recusandae ipsa?
                Autem architecto nobis sapiente consectetur porro harum alias
                ipsa facere consequatur doloremque culpa fugiat nihil id
                pariatur dolorem voluptas, saepe voluptates numquam magni minus
                tenetur aliquam asperiores possimus. Tenetur, eius. Et tempore
                omnis voluptates eum minus illum quia voluptatibus? Fugiat
                repudiandae voluptas atque doloremque ipsum tempore, eius, rem
                hic expedita tenetur culpa incidunt asperiores maxime sequi
                aliquid cupiditate, nisi eaque. Ab provident laboriosam culpa
                commodi, repellendus obcaecati possimus eum minus aliquid
                tenetur repellat ex architecto quia quisquam atque optio.
                Pariatur porro quo veritatis. Veritatis facere enim architecto
                quam quasi reprehenderit! Nihil delectus esse officiis modi
                consequuntur maiores iusto, doloremque maxime magnam optio
                perferendis dolorem minima quos nam, hic, ab ducimus quia?
                Consequuntur provident repellat error minus a, dignissimos
                similique voluptate! Itaque, voluptatibus? Provident maiores at
                alias quibusdam, repellat nostrum aspernatur? Ea unde,
                cupiditate delectus vel, aut voluptates voluptas maxime culpa
                quisquam error autem perferendis saepe. Non vero debitis dolor
                dolores. Eius exercitationem dolores eveniet minus impedit!
                Maiores officia dolorum consequatur. Ut ad, unde nam enim
                inventore iste aspernatur, error fugit veritatis aliquam
                consequatur eum earum. Sit voluptatem ab rem quasi. Accusamus,
                quam cumque voluptatum, ea voluptatem eum aliquam delectus
                laboriosam voluptates consequatur beatae excepturi, labore
                quaerat facilis sapiente omnis cupiditate sunt quisquam
                incidunt? Consequatur officiis, nemo tempore maxime iure
                voluptate. Atque, amet. Eos ab debitis doloribus commodi. Ea
                error velit consequuntur? Accusantium illo veritatis quod
                doloribus ipsam nam atque nobis obcaecati, voluptates sed illum
                nihil praesentium reiciendis in! Expedita, aut! Modi, nemo cum
                deleniti ab veritatis quidem amet quas iusto facilis, ad
                cupiditate eveniet nobis quod iste tempora obcaecati praesentium
                consequuntur corrupti repellendus corporis eos voluptates vero.
                Nostrum, reprehenderit atque!
              </div>
            </div>
          </div>
        </div>
      </Context>
    </>
  );
}

export default Shorts;
