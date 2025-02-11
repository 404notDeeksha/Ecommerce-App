import React, { useState } from "react";
import { LogoBlack } from "./Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  setCookieId,
  setDataToLocalStorage,
} from "../../../utils/common-utils";
import { URL } from "../../../constant/url";
import axios from "axios";

//private route
export const AccountAuth = () => {
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state; // navigating from SignInForm

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchUserData = async () => {
      console.log(`${URL.ACCOUNT_API}/auth`);
      try {
        const response = await axios.post(`${URL.ACCOUNT_API}/auth`, {
          email: email,
          password: password,
        });
        if (response) {
          // console.log("Data sent successfully", response.data);
          if (response.data.success) {
            setErrorMsg(false);
            setDataToLocalStorage("userInfo", {
              name: response.data.data.data.user.name,
              email: response.data.data.data.user.email,
            });
            // setCookieId("userId", response.data.data.data.user.userId);
            setCookieId("token", response.data.data.data.token);
            navigate("/home");
          }
        }
      } catch (err) {
        console.log("Error in verifying User", err);
        if (!err.response.data.success) {
          setErrorMsg("Wrong password entered!");
          setPassword("");
        }
      }
    };
    fetchUserData();
  };

  return (
    <div className="h-screen bg-white pt-3.5 px-[18px] pb-[22px]">
      <LogoBlack />
      <div className="rounded-lg border-[1px] border-[#ddd] py-5 px-6 mb-[22px] w-[350px] m-auto text-xs leading-5">
        <h1 className="font-normal mb-3.5 text-[28px] leading-5 ">Sign in</h1>

        <div className="mt-7 flex flex-row justify-between">
          <span className="">{email}</span>
          <span className="ml-4 underline text-cyan-500">
            <Link to="/login/email">Change</Link>
          </span>
        </div>

        <form id="signin" className="my-2.5 " onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="" className="flex justify-between">
            <span className="font-bold ">Password</span>
            {/* <span className="underline text-cyan-500">
              <Link>Forgot password?</Link>
            </span> */}
          </label>

          <input
            type="text"
            className="w-full px-2 py-1 border-2 border-black border-solid mt-2 mb-2"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          {errorMsg && <div className="text-red-600 mb-2">{errorMsg}</div>}
          <button className="bg-[#FFD814] text-xs px-1.5 py-[1px] h-[29px] leading-5 rounded-lg w-full ">
            Signin
          </button>
        </form>
      </div>
    </div>
  );
};
