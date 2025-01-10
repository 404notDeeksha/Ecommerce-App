import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setToLocalStorage } from "./user/LocalStorage";

export const SignInForm = () => {
  const [signinInput, setSigninInput] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();
  const api_url = import.meta.env.VITE_API_BASE_URL + "signin";
  // console.log("api_url", api_url);

  const handleSubmit = (e, value) => {
    e.preventDefault();
    const val = CheckEmailOrPhoneNumber(value);

    if (val === "number") {
      navigate("/signin/auth", { state: { number: signinInput } });
    } else if (val == "email") {
      console.log("Email -->", signinInput);

      axios
        .post(api_url, { email: signinInput })
        .then((res) => {
          console.log("User registered", res);
          const key = res.data.data.password;
          setToLocalStorage("authToken", res.data.data.token);
          navigate("/signin/auth", {
            state: { email: signinInput, password: key },
          });
          // console.log("User registered", res, key);
        })
        .catch((err) => {
          console.log("User not Registered", err);
          setErrorMsg("User is not Registered!");
        });
    } else {
      const message =
        "Wrong or Invalid email address or mobile phone number. Please correct and try again.";
      setErrorMsg(message);
    }
  };

  return (
    <>
      <div className="rounded-lg border-[1px] border-[#ddd] py-5 px-6 mb-[22px] w-[350px] m-auto text-xs leading-5">
        <h1 className="font-normal mb-3.5 text-[28px] leading-5 ">Sign in</h1>
        <form
          id="signin"
          className="my-2.5 "
          onSubmit={(e) => handleSubmit(e, signinInput)}
        >
          <label htmlFor="" className="font-bold">
            Email or mobile phone number
          </label>

          <input
            type="text"
            className="w-full px-2 py-1 border-2 border-black border-solid mt-2 mb-4"
            value={signinInput}
            onChange={(e) => setSigninInput(e.target.value)}
          />

          {errorMsg && <div className="text-red-600">{errorMsg}</div>}
          <button className="bg-[#FFD814] text-xs px-1.5 py-[1px] h-[29px] leading-5 rounded-lg w-full ">
            Continue
          </button>
        </form>
        <div className=" mt-[18px] mb-[22px]">
          By continuing, you agree to Amazon's
          <Link> Conditions of Use</Link> and <Link>Privacy Notice</Link>
        </div>
        <div className="pb-[22px] border-b-[1px] mb-3.5 ">Need help?</div>
        <div className="font-bold mb-1">Buying for work?</div>
        <div className="">Shop on Amazon Business</div>
      </div>
    </>
  );
};

const CheckEmailOrPhoneNumber = (value) => {
  const numberRegex = /^\+?[1-9]\d{1,14}$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

  if (numberRegex.test(value)) {
    return "number";
  } else if (emailRegex.test(value)) {
    return "email";
  } else return 0;
};
