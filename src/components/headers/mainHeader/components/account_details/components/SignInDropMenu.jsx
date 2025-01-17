import React from "react";
import { getAccountDetails, getYourLists } from "../data/PrivateLinks";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { getDataFromLocalStorage } from "../../../../../../utils/common-utils";

export const SignInDropMenu = () => {
  const listDetails = getYourLists();
  const accountDetails = getAccountDetails();

  const userData = getDataFromLocalStorage("userInfo");

  return (
    <>
      <div
        className="invisible group-hover:visible  z-[5] 
       bg-white text-black shadow-lg  rounded-sm border-[#bbb]
       absolute top-[54px]  w-[500px] -left-64
       after:content-['']  after:absolute after:bottom-[100%] after:left-[71.5%] after:border-[10px] after:border-b-white after:border-l-transparent   
       after:border-t-transparent  after:border-r-transparent        
       "
      >
        <div className="mx-5 mt-4 mb-3 ">
          {!userData && (
            <div className="flex-col ">
              <Link to="/signin">
                <div className="bg-[#FFD814] text-[#111] font-[400] rounded-lg m-auto text-[13px] w-[220px] h-[33px] text-center pt-1.5 cursor-pointer">
                  Sign in
                </div>
              </Link>
              <div className="text-[11px] text-center mt-1">
                New customer?
                <Link to="/signup"> Start here.</Link>
              </div>
            </div>
          )}

          {/* ---------------------------------------BORDER #1----------------------------------- */}

          <div
            className=" absolute left-5 top-[77px]
                  w-[450px] opacity-50"
          />

          <div className="mt-14 flex">
            {/* ---------------------------------------LIST #1----------------------------------- */}
            <div className="w-[210px] mr-5 font-bold text-[16px]">
              Your Lists
              <ul className="font-normal mt-1">
                {listDetails.map((ele, index) => {
                  return (
                    <li
                      key={uuid()}
                      className="text-[13px] text-[#444] leading-6"
                    >
                      <a href="#"> {ele.category}</a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* ---------------------------------------BORDER #2----------------------------------- */}

            <div
              className=" absolute left-[248px] top-[100px]
                  h-[250px] border-[0.5px] border-slate-300 opacity-50"
            />

            {/* ---------------------------------------LIST #2----------------------------------- */}
            <div className="pl-5 font-bold w-[190px]">
              Your Account
              <ul className="font-normal mt-1">
                {accountDetails.map((ele, index) => {
                  return (
                    <li
                      key={uuid()}
                      className="text-[13px] text-[#444] leading-6"
                    >
                      <a href="#"> {ele.category}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
