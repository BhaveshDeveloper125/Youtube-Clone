import React, { useState } from "react";

function ImageCarousel(prop) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function Previous() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prop.img.length - 1 : prevIndex - 1
    );
  }

  function Next() {
    setCurrentIndex((prevIndex) =>
      prevIndex === prop.img.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {prop.img.map((image, i) => (
          <div key={i} className="min-w-full">
            <img
              src={image}
              alt={`Slide #${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={Previous}
          className="size-fit bg-white rounded-full p-2 text-xl text-black cursor-pointer hover:bg-gray-200"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <button
          onClick={Next}
          className="size-fit bg-white rounded-full p-2 text-xl text-black cursor-pointer hover:bg-gray-200"
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default ImageCarousel;
