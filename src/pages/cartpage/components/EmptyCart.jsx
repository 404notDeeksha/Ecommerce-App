import { images } from "../../../assets/images/index";

export const EmptyCartPage = () => {
  return (
    <div className="flex-col items-center pt-14 pb-[15px] bg-[#fff]  mb-5 flex mr-5  ">
      <img className="w-[365px] h-[209px] " src={images.emptyCartKettle} />
      <div className="ml-5 ">
        <h3 className="font-bold text-[24px] leading-8 p-6">
          {" "}
          Your Amazon Cart is empty{" "}
        </h3>
      </div>
    </div>
  );
};
