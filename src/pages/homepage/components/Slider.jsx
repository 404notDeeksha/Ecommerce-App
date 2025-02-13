import React, { useEffect } from "react";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SliderSkeleton } from "./SliderSkeleton";
import { getCarousel } from "../../../api/protectedApi";
import { Link } from "react-router-dom";

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [carouselData, setCarouselData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCarousel();
        if (result) {
          setLoading(false);
          if (result.success) {
            setCarouselData(result.data);
          }
        }
      } catch (err) {
        console.error("Error:", err);
      }
    };
    fetchData();
  }, []);

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
    const carouselDataLength = carouselData.length - 1;
    if (newIndex > carouselDataLength) {
      return 0;
    } else if (newIndex < 0) {
      return carouselDataLength - 1;
    }
    return newIndex;
  };

  const updateIndex = (index) => {
    setButtonClicked(true);
    setCurrentIndex(handleIndex(index));
  };

  let currentImage = carouselData[currentIndex];
  return (
    <>
      {loading ? (
        <SliderSkeleton />
      ) : (
        <div className="relative w-full flex justify-center">
          <div className="relative w-full max-w-[1500px] max-h-[300px]">
            <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center pointer-events-none">
              <div
                className="absolute left-2 -translate-y-1/2 flex items-center p-2 cursor-pointer pointer-events-auto"
                onClick={() => updateIndex(currentIndex - 1)}
              >
                <ArrowForwardIosIcon className="rotate-180 scale-[1.7]" />
              </div>
              <div
                className="absolute right-2 -translate-y-1/2 flex items-center p-2 cursor-pointer pointer-events-auto"
                onClick={() => updateIndex(currentIndex + 1)}
              >
                <ArrowForwardIosIcon className="scale-[1.7]" />
              </div>
            </div>
            {currentImage && (
              <SlidesImages
                data={currentImage?.category_image_address}
                category={currentImage?.category}
                className="w-full"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

const SlidesImages = ({ data, category }) => {
  const filter = `category=${category}`;
  console.log("Category Slide Img", filter);
  return (
    <div className="cursor-pointer">
      <Link to={`/products?category=${category}`}>
        <img
          src={data}
          className="w-full max-h-full object-cover"
          alt="carousel-image"
        />
      </Link>
    </div>
  );
};
