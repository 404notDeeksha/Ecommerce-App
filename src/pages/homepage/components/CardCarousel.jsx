import { useState, useRef, useEffect } from "react";

export const MultiCardCarousel = ({ data, title }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

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

  return (
    <div
      className="relative overflow-hidden mx-auto  bg-white  mb-5 px-5 py-2.5  
        "
    >
      <div className="my-2.5 flex items-center">
        <h2 className="text-black font-bold text-[21px]">{title}</h2>
        <span className="text-sm pl-4">See all offers</span>
      </div>
      <div className="flex justify-between absolute w-full max-w-[1420px]  max-h-[200px] h-full ">
        <MultiCarouselLeftButton movePrev={movePrev} isDisabled={isDisabled} />
        <MultiCarouselRightButton moveNext={moveNext} isDisabled={isDisabled} />
      </div>
      <MultiImageCarousel data={data} carousel={carousel} />
    </div>
  );
};

const MultiCarouselLeftButton = ({ movePrev, isDisabled }) => {
  return (
    <button
      onClick={movePrev}
      className=" w-10 h-[50%] text-center bg-white text-slate-800  hover:text-black disabled:opacity-50 z-10 p-0 m-0 transition-all ease-in-out duration-300  my-auto"
      disabled={isDisabled("prev")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-20 -ml-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      {/* <span className="sr-only">Prev</span> */}
    </button>
  );
};

const MultiCarouselRightButton = ({ moveNext, isDisabled }) => {
  return (
    <>
      <button
        onClick={moveNext}
        className=" w-10 h-[50%] text-center bg-white text-black disabled:opacity-25  z-10 p-0 m-0 transition-all ease-in-out duration-300 my-auto"
        disabled={isDisabled("next")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-20 -ml-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="sr-only">Next</span>
      </button>
    </>
  );
};

const MultiImageCarousel = ({ data, carousel }) => {
  return (
    <div ref={carousel} className="carousel-container">
      {data.map((ele) => {
        return (
          <div
            key={ele.id}
            className="text-center relative w-52 h-52 snap-start"
          >
            <a
              href={ele.link}
              className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
              //   style={{ backgroundImage: `url(${ele.imageUrl || ""})` }}
            >
              <img
                src={ele.image || ""}
                alt={ele.title}
                className="w-full aspect-square"
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

