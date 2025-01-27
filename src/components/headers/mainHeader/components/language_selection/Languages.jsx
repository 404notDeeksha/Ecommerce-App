import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../../../../redux/slices/languageSlice";
import { languages } from "../../../../../utils/common-consts";

export const Languages = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.data);

  const handleClick = (e) => {
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
      <ul className="py-0.5 text-sm text-nowrap text-left mt-2.5 ml-3.5">
        <div className="flex-col">
          {(languages || [])?.map((ele, index) => {
            return (
              <li
                key={ele.id}
                value={ele.value}
                className="mx-1.5 leading-7 text-[13px]"
              >
                <Link className=" hover:text-orange-400 hover:underline flex">
                  <fieldset>
                    <div className={`${index === 0 ? "pb-3" : "pb-0"}`}>
                      <input
                        type="radio"
                        id={ele.value}
                        value={ele.value}
                        checked={selectedLanguage === ele.value}
                        name="languageSelection"
                        className=" appearance-none rounded-[50%]
                            w-[16px]  h-[16px]  border-[2px] hover:border-[5px] checked:border-[5px]
                             checked:bg-orange-400 border-white outline-[#999] outline outline-[1px]  
                            mr-[5px] relative top-[4px]
                             hover:bg-orange-400"
                        onClick={handleClick}
                      />
                      <label htmlFor={ele.value} className="ml-0.5">
                        {ele.category} -{" "}
                        <span className="font-[500]">{ele.value}</span>
                      </label>
                    </div>
                  </fieldset>
                </Link>

                {/* ----------------------BORDER #1----------------------- */}
                {index === 0 && (
                  <div
                    className=" absolute left-10 top-[44px]
                      w-[200px] border-[0.5px] border-slate-300 opacity-50"
                  />
                )}
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};
