import React from "react";
import { images } from "../../../../../../assets/images";
import { getDropDownList } from "../data/DisplayLanguages";
import { Link } from "react-router-dom";

export const DropDownMenu = ({ language }) => {
  console.log("Entering drop down menu");
  const LangArray = getDropDownList() || [];

  const handleClick = (e) => {
    const value = e.target.value;
    language(value);
  };

  return (
    <div
      className="invisible group-hover:visible
          flex-col  bg-white text-black shadow-md rounded
           absolute top-[54px] h-[370px] w-[260px]
           after:content-['']  after:absolute after:bottom-[100%] after:left-[26%] after:border-[10px] after:border-b-white after:border-l-transparent   
           after:border-t-transparent  after:border-r-transparent        
           "
    >
      <ul className="py-0.5 text-sm text-nowrap text-left mt-2.5 ml-3.5">
        <div className="flex-col">
          {LangArray?.map((ele, index) => {
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
                        defaultChecked={index === 0}
                        name="languageSelection"
                        className=" appearance-none rounded-[50%]
                            w-[16px]  h-[16px]  border-[2px] hover:border-[5px] checked:border-[5px] checked:bg-orange-400 border-white outline-[#999] outline outline-[1px]  
                            mr-[5px] relative top-[4px]
                             hover:bg-orange-400"
                        onClick={(e) => handleClick(e)}
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
      <Link className="absolute left-10 bottom-24 text-blue-600 font-semibold text-[13px] hover:underline">
        Learn more
      </Link>
      <div
        className=" absolute left-10 bottom-20
                      w-[200px] border-[0.5px] border-slate-300 opacity-50"
      />
      <div className="flex absolute bottom-14 text-[13px]">
        <img
          src={images.indianFlag}
          alt="amazonCountry"
          className="w-[22px] h-4 scale-[.8] ml-3"
        />
        <div className=" ml-1 -mt-[2px] ">You are shopping on Amazon.in</div>
      </div>
      <Link className="absolute left-10 bottom-5 text-blue-600 font-semibold text-[13px] hover:underline">
        Change country/ region
      </Link>
    </div>
  );
};
