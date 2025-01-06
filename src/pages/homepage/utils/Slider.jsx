import React, { useEffect } from "react";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Slider = ({ imageData }) => {
  
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

  /**
   * This function handles negative/edge cases for index
   * @param {*} newIndex
   * @returns handle index value
   */
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

  return (
    <div className="slider">
      <SliderArrows
        handleLeft={() => updateIndex(currentIndex - 1)}
        handleRight={() => updateIndex(currentIndex + 1)}
      />
      <SlidesImages data={imageData} />
    </div>
  );
};
// relative top-32 absolute top-[125px]
// absolute top left w-full h-full
// absolute top-32 justify-between w-full
const SliderArrows = ({ handleLeft, handleRight }) => {
  return (
    <>
      <div className="absolute max-w-[inherit] w-full flex justify-between">
        <div
          className="arrow-left flex items-center h-[300px] p-5"
          onClick={handleLeft}
        >
          <ArrowForwardIosIcon className="rotate-180 scale-[1.7]  " />
        </div>
        <div
          className="arrow-right flex items-center h-[300px] p-5"
          onClick={handleRight}
        >
          <ArrowForwardIosIcon className="scale-[1.7] " />
        </div>
      </div>
    </>
  );
};
const SlidesImages = ({ data }) => {
  return (
    <div className="flex h-full overflow-x-hidden ">
      <img src={data} className="w-full max-h-full object-fill" />
    </div>
  );
};
