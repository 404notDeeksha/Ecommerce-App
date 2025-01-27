import React from "react";
import { images } from "../../../../assets/images";

export const AmazonLogo = () => {
  return (
    <>
      <div className="amazon-logo">
        <img
          src={images.logo}
          alt="amazon-logo"
          className={`amazon-logo-image`}
        />
        <span className={`amazon-logo-in`}>.in</span>
      </div>
    </>
  );
};
