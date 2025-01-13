import React, { useEffect } from "react";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate } from "react-router-dom";

export const Slider = ({ imageData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!buttonClicked) {
        setCurrentIndex(handleIndex(currentIndex + 1));
      } else {
        setButtonClicked(false);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [buttonClicked, currentIndex]);

  useEffect(() => {
    setTimeout(() => {
      // setData(automaticRotatingCarousel);
      setLoading(false);
    }, 2000);
  }, []);

  const handleIndex = (newIndex) => {
    // console.log(`newIndex`, newIndex);
    const imageDataLength = imageData.length - 1;
    if (newIndex > imageDataLength) {
      return 0;
    } else if (newIndex < 0) {
      return imageDataLength - 1;
    }
    return newIndex;
  };

  const updateIndex = (index) => {
    // console.log(`Index updated`);
    setButtonClicked(true);
    setCurrentIndex(handleIndex(index));
  };

  const clickCarousel = () => {
    console.log("Clicking");
    navigate("/products");
  };

  console.log("IMAGE DATA", imageData);
  let currentImage = imageData[currentIndex];

  return (
    <div className="slider relative w-full" onClick={clickCarousel}>
      <SliderArrows
        handleLeft={() => updateIndex(currentIndex - 1)}
        handleRight={() => updateIndex(currentIndex + 1)}
      />
      {currentImage && (
        <SlidesImages
          data={currentImage?.category_image_address}
          category_id={currentImage?.category_id}
          loading={loading}
        />
      )}
    </div>
  );
};

const SliderArrows = ({ handleLeft, handleRight }) => {
  return (
    <>
      <div className="absolute max-w-[inherit] w-full flex justify-between">
        <div
          className="arrow-left flex items-center h-[300px] p-5 cursor-pointer"
          onClick={handleLeft}
        >
          <ArrowForwardIosIcon className="rotate-180 scale-[1.7]  " />
        </div>
        <div
          className="arrow-right flex items-center h-[300px] p-5 cursor-pointer"
          onClick={handleRight}
        >
          <ArrowForwardIosIcon className="scale-[1.7] " />
        </div>
      </div>
    </>
  );
  // transition-transform duration-500 ease-in-out
};
const SlidesImages = ({ data, loading }) => {
  console.log(loading);
  return (
    <div className="cursor-pointer">
      {loading ? (
        <div className="bg-gray-300 animate-pulse w-full h-[600px]"></div>
      ) : (
        <img
          src={data}
          className="w-full max-h-full object-cover"
          alt="carousel-image"
        />
      )}
    </div>
  );
};
