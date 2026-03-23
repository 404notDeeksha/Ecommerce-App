import { Link } from "react-router-dom";

export const CreateLoginPopup = () => {
  return (
    <div className="w-[350px] m-auto text-[14px] mt-10">
      <div className="text-xs text-center ">New to Amazon?</div>
      <button className="w-full rounded border-2">
        <Link to="/signup">Create your Amazon account</Link>
      </button>
    </div>
  );
};
