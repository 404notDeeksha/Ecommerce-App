import { Link } from "react-router-dom";
import { images } from "../../../assets/images/index";

export const EmptyCartPage = () => {
  return (
    <><div className="pt-14 pb-[15px] bg-[#fff]  mb-5 flex mr-5  ">
      <img className="w-[365px] h-[209px] " src={images.emptyCartKettle} />
      <div className="ml-5 ">
        <h3 className="font-bold text-[24px] leading-8">
          {" "}
          Your Amazon Cart is empty{" "}
        </h3>
        <div className="flex mt-10 gap-2">
          <div className="rounded-3xl border-black border-2 bg-orange-400 text-sm px-4 py-1 cursor-pointer">
            <Link to="/signin">Sign in to your account</Link>
          </div>
          <div className="rounded-3xl border-black border-2 text-sm px-4 py-1  cursor-pointer">
            <Link to="/create">Sign up now</Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
