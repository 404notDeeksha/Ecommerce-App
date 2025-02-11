import React from "react";
import { LogoBlack } from "./LogoBlack";
import { EmailLoginForm } from "./EmailLoginForm";
import { Link } from "react-router-dom";

export const EmailLogin = () => {
  return (
    <div className="bg-white h-screen">
      <div className="pt-3.5 px-[18px] pb-[22px]">
        <LogoBlack />
        <EmailLoginForm />
        <div className="w-[350px] m-auto text-sm my-10">
          <div className="text-xs text-center p-2 ">New to Amazon?</div>
          <button className="w-full rounded border-2 p-2">
            <Link to="/signup">Create your Amazon account</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
