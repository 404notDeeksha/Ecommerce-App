import React, { useEffect, useState } from "react";
import { LogoBlack } from "./LogoBlack";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";
import { useSelector } from "react-redux";

export const AccountAuthLogin = () => {
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state; // navigating from EmailLoginForm
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchUserData = async () => {
      try {
        const result = await loginUser({ email, password });
        if (result.success) {
          setErrorMsg(false);
          dispatch(loginSuccess({ user: result.user }));
          window.location.href = "/home";
          navigate("/home");
        }
      } catch (err) {
        console.log("Error in verifying Account", err);
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
          </label>

          <input
            type="text"
            className="w-full px-2 py-1 border-2 border-black border-solid mt-2 mb-2"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          {errorMsg && <div className="text-red-600 ">{errorMsg}</div>}
          <button className="bg-[#FFD814] text-xs p-1 leading-5 rounded-lg w-full my-2 ">
            Signin
          </button>
        </form>
      </div>
    </div>
  );
};
