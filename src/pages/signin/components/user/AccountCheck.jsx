import React, { useState } from "react";
import { LogoBlack } from "../Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";

//private route
export const AccountCheck = () => {
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const location = useLocation();
  const data = location.state.email || location.state.number;

  const navigate = useNavigate();

  const checkRegisteredPassword = (password) => {
    if (password !== location.state.password) {
      setErrorMsg("Wrong password entered!");
      setPassword("");
      return false;
    }
    setErrorMsg(false);
    return true;
  };

  // console.log("Data", data);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password Check", checkRegisteredPassword(password));
    if (checkRegisteredPassword(password)) {
      navigate("/");
    }
  };

  return (
    <div className="h-screen bg-white pt-3.5 px-[18px] pb-[22px]">
      <LogoBlack />
      <div className="rounded-lg border-[1px] border-[#ddd] py-5 px-6 mb-[22px] w-[350px] m-auto text-xs leading-5">
        <h1 className="font-normal mb-3.5 text-[28px] leading-5 ">Sign in</h1>

        <div className="mt-7">
          <span className="">{data}</span>
          <span className="ml-4 underline text-cyan-500">
            <Link to="/signin">Change</Link>
          </span>
        </div>

        <form id="signin" className="my-2.5 " onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="" className="flex justify-between">
            <span className="font-bold ">Password</span>
            <span className="underline text-cyan-500">
              <Link>Forgot password?</Link>
            </span>
          </label>

          <input
            type="text"
            className="w-full px-2 py-1 border-2 border-black border-solid mt-2 mb-4"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          {errorMsg && <div className="text-red-600">{errorMsg}</div>}
          <button className="bg-[#FFD814] text-xs px-1.5 py-[1px] h-[29px] leading-5 rounded-lg w-full ">
            Signin
          </button>
        </form>
      </div>
    </div>
  );
};
