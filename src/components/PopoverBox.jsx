import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { inactiveOverlay } from "../redux/slices/overlaySlice";
import { setLocation } from "../redux/slices/locationSlice";

export const PopoverBox = () => {
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(inactiveOverlay());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkPincode()) {
      dispatch(setLocation(pincode));
      dispatch(inactiveOverlay());
    } else {
      setError("Invalid PinCode, please check and try again.");
    }
  };

  const checkPincode = () => {
    const pincodeRegex = /^\d{6}$/;
    return pincodeRegex.test(pincode);
  };

  return (
    <div className=" bg-white p-1 rounded-lg  max-w-[500px] w-full">
      <header className="border-b-[1px] border-[#d5d9d9] text-left    bg-[#f0f2f2] relative    rounded-t-lg  py-0 px-6 flex justify-between font-bold">
        <h4 className="py-4 min-h-14  text-base">Choose your location</h4>
        <IoIosClose className=" scale-[2.5] mt-5" onClick={handleClose} />
      </header>
      <div className="py-4 px-6 ">
        <div className="text-[#565959] text-xs ">
          Select a delivery location to see product availability and delivery
          options
        </div>

        <h5 className="text-[#565959] text-center text-xs mb-3.5">
          or enter an Indian pincode
        </h5>

        <form className="flex h-[29px]" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-[66%] mr-[2%] overflow-visible border-[1px] rounded border-[#888c8c] text-black cursor-text p-2"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <button
            className="w-[32%] border-[1px] leading-5 border-[#888c8c] rounded-lg text-sm"
            onClick={checkPincode}
          >
            Apply
          </button>
        </form>
        <div className="text-red-700 text-xs pt-2">{error}</div>
      </div>
    </div>
  );
};
