import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../../../../redux/slices/languageSlice";
import { languages } from "../../../../../utils/common-consts";

export const Languages = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.data);

  const handleChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };
  return (
    <div
      className="invisible group-hover:visible
          flex-col  bg-white text-black shadow-md rounded
           absolute top-[54px] w-[200px] pb-5
           after:content-['']  after:absolute after:bottom-[100%] 
           after:left-[26%] after:border-[10px] after:border-b-white after:border-l-transparent   
           after:border-t-transparent  after:border-r-transparent        
           "
    >
      <ul className="flex flex-col py-0.5 text-sm text-nowrap text-left mt-2.5 ml-3.5">
        {(languages || [])?.map((ele, index) => {
          return (
            <li key={ele.id} className="mx-1.5 leading-7 text-[13px]">
              <fieldset>
                <div className={`${index === 0 ? "pb-3" : "pb-0"}`}>
                  <label className="hover:text-orange-400">
                    <input
                      type="radio"
                      value={ele.value}
                      checked={selectedLanguage === ele.value}
                      name="languageSelection"
                      className="appearance-none  w-[16px]  h-[16px]  mr-1 rounded-[50%] cursor-pointer  outline-[#999] outline outline-[1px] border-white   border-[5px] hover:border-[5px] checked:bg-orange-400 hover:bg-orange-400  "
                      onChange={handleChange}
                    />
                    <span className="px-2 py-0.5">
                      {ele.category} - {ele.value}
                    </span>
                  </label>
                </div>
              </fieldset>

              {/* ----------------------BORDER #1----------------------- */}
              {index === 0 && (
                <div
                  className=" absolute left-10 top-[44px]
                      w-[150px] border-[0.5px] border-slate-300 opacity-50"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
