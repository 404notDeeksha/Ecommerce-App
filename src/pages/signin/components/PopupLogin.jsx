import { Link } from "react-router-dom";

export const CreateLoginPopup = () => {
  return (
    <div className="w-[350px] m-auto text-[14px] mt-10">
      <div className="text-xs text-center ">New to Amazon?</div>
      <div className="border border-[#e7e7e7]  mb-5 "></div>
      <button className="w-full rounded border-[3px] leading-5">
        <Link to="/create">Create your Amazon account</Link>
      </button>
    </div>
  );
};
