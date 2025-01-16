import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../../../constant/url";
import { setToLocalStorage } from "../../../utils/common-utils";

export const SignInForm = () => {
  const [signinInput, setSigninInput] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e, value) => {
    e.preventDefault();
    const val = checkEmailOrPhoneNumber(value);
    // if (val === "number") {
    //   navigate("/signin/auth", { state: { number: signinInput } });
    // } else
    if (val == "email") {
      // console.log("Email -->", signinInput);
      try {
        const response = await axios.post(`${URL.ACCOUNT_API}/check`, {
          email: signinInput,
        });
        // console.log("Account info received ", response.data.data);
        if (response.data.success) {
          let value = {
            userId: response.data.data.userId,
            name: response.data.data.name,
            email: response.data.data.email,
            password: response.data.data.password,
          };
          setToLocalStorage("user-info", value);
          navigate("/signin/auth");
        }
      } catch (err) {
        console.log("User not Registered", err);
        setErrorMsg("User is not Registered!");
      }
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
      </div>
    </>
  );
};

const checkEmailOrPhoneNumber = (value) => {
  const numberRegex = /^\+?[1-9]\d{1,14}$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

  if (numberRegex.test(value)) {
    return "number";
  } else if (emailRegex.test(value)) {
    return "email";
  } else return 0;
};
