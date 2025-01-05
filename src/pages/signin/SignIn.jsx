import React from "react";
import { LogoBlack } from "./components/Logo";
import { SignInForm } from "./components/SigninForm";
import { CreateLoginPopup } from "./components/PopupLogin";

export const SignIn = () => {
  return (
    <div className="bg-white h-screen">
      <div className="pt-3.5 px-[18px] pb-[22px]">
        <LogoBlack />
        <SignInForm />
        <CreateLoginPopup />
      </div>
    </div>
  );
};
