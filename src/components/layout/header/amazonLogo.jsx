import { images } from "@assets/images/index";

export const AmazonLogo = () => {
  return (
    <div className="amazon-logo">
      <img
        src={images.logo}
        alt="amazon-logo"
        className={`amazon-logo-image`}
      />
      <span className={`amazon-logo-in`}>.in</span>
    </div>
  );
};
