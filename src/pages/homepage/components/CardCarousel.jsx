import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { getImages } from "@utils/commonUtils";
import { MultiCardCarouselSkeleton } from "./multiCardCarouselSkeleton";
import { getProducts } from "@api/products/index.js";
import { routes } from "@config/routes.js";
import PropTypes from "prop-types";

export const MultiCardCarousel = ({ title, category, query }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const carousel = useRef(null);
  const filter = `category=${category}&&${query}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProducts(category, query);
        if (result) {
          setLoading(false);
          if (result.success) {
            setData(result.data);
          }
        }
      } catch (err) {
        console.error("Error:", err);
      }
    };
    fetchData();
  }, [category, query]);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }
    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }
    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return loading ? (
    <MultiCardCarouselSkeleton />
  ) : (
    <div className="relative overflow-visible mx-auto bg-white mb-5 px-5 py-2.5 max-w-[1480px]">
      <div className="my-2.5 flex items-center">
        <h2 className="text-black font-bold text-[21px]">{title}</h2>
        <Link to={routes.getProducts(filter)}>
          <span className="text-sm pl-4">See all offers</span>
        </Link>
      </div>
      <div className="relative">
        <div className="flex justify-between absolute inset-0 max-h-[200px] h-full z-10">
          <MultiCarouselLeftButton movePrev={movePrev} isDisabled={isDisabled} />
          <MultiCarouselRightButton moveNext={moveNext} isDisabled={isDisabled} />
        </div>
        <div className="overflow-hidden">
          <MultiImageCarousel dataset={data} carousel={carousel} />
        </div>
      </div>
    </div>
  );
};

const MultiCarouselLeftButton = ({ movePrev, isDisabled }) => {
  return (
    <button
      onClick={movePrev}
      className="w-12 sm:w-14 h-[50%] text-center bg-white text-slate-800 hover:text-black disabled:opacity-50 z-10 p-0 m-0 transition-all ease-in-out duration-300 my-auto shadow-md rounded"
      disabled={isDisabled("prev")}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
};

const MultiCarouselRightButton = ({ moveNext, isDisabled }) => {
  return (
    <button
      onClick={moveNext}
      className="w-12 sm:w-14 h-[50%] text-center bg-white text-black disabled:opacity-25 z-10 p-0 m-0 transition-all ease-in-out duration-300 my-auto shadow-md rounded"
      disabled={isDisabled("next")}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      <span className="sr-only">Next</span>
    </button>
  );
};

const MultiImageCarousel = ({ dataset, carousel }) => {
  return (
    <div ref={carousel} className="carousel-container">
      {dataset?.map((product, index) => {
        if (index > 14) {
          return null;
        }
        return (
          <div key={index} className="text-center relative w-52 h-52 snap-start">
            <Link to={routes.getProduct(product.productId)}>
              <div className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0">
                <img
                  src={getImages(product.images[0]) || ""}
                  alt={product.productName}
                  className="w-full aspect-square"
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

MultiCardCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};
