import { Slider } from "./components/slider";
import { CategoryGridCarousel } from "./components/categoryGridCarousel";
import {
  appliances,
  headphones,
  homeDecor,
  beauty,
} from "./data/categoryGridCarousel";
import { MultiCardCarousel } from "./components/cardCarousel";

export const HomePage = () => {
  return (
    <div className="mx-auto overflow-clip relative z-[2]">
      <Slider />
      <div className="">
        <CategoryGridCarousel
          data1={homeDecor}
          data2={appliances}
          data3={headphones}
          data4={beauty}
          label1="Revamp your home in style"
          label2="Appliances for your home"
          label3="Starting 149 |  HeadPhones"
          label4="Beauty & Makeup"
        />
      </div>
      <MultiCardCarousel
        title="Bestsellers from Beauty"
        category="beautyAndMakeup"
        query="bestsellers=true"
      />
      <MultiCardCarousel
        title="Headphones at 40% off"
        category="headphones"
        query="discount=40"
      />
    </div>
  );
};
