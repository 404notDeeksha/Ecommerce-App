import React from "react";
import { LogoBlack } from "./components/Logo";
import { EmailLoginForm } from "./components/EmailLoginForm";
import { CreateLoginPopup } from "./components/PopupLogin";

export const EmailLogin = () => {
  return (
    <div className="bg-white h-screen">
      <div className="pt-3.5 px-[18px] pb-[22px]">
        <LogoBlack />
        <EmailLoginForm />
        <CreateLoginPopup />
      </div>
    </div>
  );
};
