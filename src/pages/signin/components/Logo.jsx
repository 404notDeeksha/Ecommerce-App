import { images } from "../../../assets/images";
export const LogoBlack = () => {
  return (
    <>
      <div className="w-full mx-auto mb-[18px] align-middle">
        <a className="flex justify-center">
          <img
            src={images.blackLogo}
            alt="amazon-logo"
            className=" scale-105 "
          />
          <span className="text-black font-semibold mr-1.5 mt-4">.in</span>
        </a>
      </div>
    </>
  );
};
