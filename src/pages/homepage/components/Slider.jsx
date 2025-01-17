import React, { useEffect } from "react";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SliderSkeleton } from "./SliderSkeleton";

export const Slider = ({ imageData, loading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);

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

  const handleIndex = (newIndex) => {
    const imageDataLength = imageData.length - 1;
    if (newIndex > imageDataLength) {
      return 0;
    } else if (newIndex < 0) {
      return imageDataLength - 1;
    }
    return newIndex;
  };

  const updateIndex = (index) => {
    setButtonClicked(true);
    setCurrentIndex(handleIndex(index));
  };

  let currentImage = imageData[currentIndex];
  return (
    <>
      {loading ? (
        <SliderSkeleton />
      ) : (
        <div className="slider relative w-full">
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
      )}
    </>
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
};
const SlidesImages = ({ data, category_id, loading }) => {
   return (
    <div className="cursor-pointer">
      <img
        src={data}
        className="w-full max-h-full object-cover"
        alt="carousel-image"
      />
    </div>
  );
};
