import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogoBlack } from "../../signin/components/Logo";
import { CgFormatItalic } from "react-icons/cg";
import { RiArrowDropRightFill } from "react-icons/ri";
import axios from "axios";
import { URL } from "../../../constant/url";
import { setCookieId, setToLocalStorage } from "../../../utils/common-utils";

export const CreateAccountForm = () => {
  const [nameDetail, setNameDetail] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordDuplicate, setIsPasswordDuplicate] = useState(true);

  const navigate = useNavigate();

  const checkEmailValidation = async (emailData) => {
    const body = {
      email: emailData,
    };
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (!emailRegex.test(emailData)) {
      setIsEmailValid(false);
      setEmailErrMsg("Enter valid email");
      return false;
    }
    try {
      const response = await axios.post(`${URL.ACCOUNT_API}/check`, body);
      if (response.data.success) {
        console.log("Data sent successfully", response);
        setIsEmailValid(false);
        setEmailErrMsg("Email already Registered");
      }
    } catch (err) {
      console.log("Issue sending data email", err);
    }
    return true;
  };

  const checkPasswordValidation = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setIsPasswordValid(false);
    }
    return passwordRegex.test(password);
  };

  const checkPasswordDuplicacy = (password, passwordAgain) => {
    if (password !== passwordAgain) {
      setIsPasswordDuplicate(false);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: nameDetail,
      email: email,
      password: password,
    };

    const emailCheck = checkEmailValidation(email);
    const passwordCheck = checkPasswordValidation(password);
    const passwordDuplicationCheck = checkPasswordDuplicacy(
      password,
      passwordAgain
    );

    if (emailCheck && passwordCheck && passwordDuplicationCheck) {
      try {
        const response = await axios.post(`${URL.ACCOUNT_API}/create`, body);
        if (response.data.success) {
          console.log("Account created successfully", response.data);
          setToLocalStorage("user-info", response.data.data);
          setCookieId(response.data.data.userId);
          navigate("/home", { state: { name: nameDetail, email: email } });
        }
      } catch (err) {
        console.log("Issue sending data", err);
      }
    }
  };

  return (
    <>
      <div className="bg-white h-screen">
        <div className="pt-3.5 px-[18px] pb-[22px]">
          <LogoBlack />
          <div className="rounded-lg border-[1px] border-[#ddd] py-5 px-6 mb-[22px] w-[350px] m-auto text-xs leading-5">
            <h1 className="font-normal mb-3.5 text-[28px] leading-5 ">
              Create Account
            </h1>

            <form
              id="signin"
              className="my-2.5 mt-6"
              onSubmit={(e) => handleSubmit(e)}
            >
              <label htmlFor="" className="font-bold">
                Your name
              </label>
              <input
                type="text"
                className="w-full px-2 py-1 border-2 border-black border-solid mb-3"
                placeholder="First and last name"
                required
                value={nameDetail}
                onChange={(e) => setNameDetail(e.target.value)}
              />

              <label htmlFor="" className="font-bold">
                Email
              </label>

              <input
                type="text"
                className={`w-full px-2 py-1 border-2 border-black border-solid mb-3 ${
                  isEmailValid ? "none" : "border-red-500"
                }`}
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              {!isEmailValid && (
                <div className="flex items-center mb-2 text-red-600">
                  <CgFormatItalic className="text-base" />
                  <div className="text-[10px]">{emailErrMsg}</div>
                </div>
              )}

              <label htmlFor="" className="font-bold">
                Password
              </label>

              <input
                type="text"
                className="w-full px-2 py-1 border-2 border-black border-solid mb-3"
                placeholder="At least 6 characters"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />

              <div
                className={`text-[10px] items-center mb-2 flex
                    ${isPasswordValid ? "" : "text-red-500"}`}
              >
                <CgFormatItalic className="text-base" />
                <div className="text-[10px]">
                  Passwords must be at least 6 characters.
                </div>
              </div>

              <label htmlFor="" className="font-bold">
                Password again
              </label>
              <input
                type="text"
                className={`w-full px-2 py-1 border-2 border-black border-solid mb-3 ${
                  isPasswordDuplicate ? "" : "border-red-500"
                }`}
                value={passwordAgain}
                required
                onChange={(e) => setPasswordAgain(e.target.value)}
              />

              {!isPasswordDuplicate && (
                <div className="items-center flex text-red-600 mb-2">
                  <CgFormatItalic className="text-base" />
                  <div className=" text-[10px] ">
                    Passwords are not matching
                  </div>
                </div>
              )}

              <button className="bg-[#FFD814] text-xs px-1.5 py-[1px] h-[29px] leading-5 rounded-lg w-full ">
                Create your amazon account
              </button>
            </form>

            <div className=" mt-[18px] mb-[22px] text-[10px]">
              By creating an account or logging in, you agree to Amazon’s
              <Link className="text-[#0066c0] ml-0.5 underline">
                Conditions of Use
              </Link>{" "}
              and{" "}
              <Link className="text-[#0066c0] underline">Privacy Policy.</Link>
            </div>

            <div className="my-2 flex">
              Already have an account?
              <div className="text-[#0066c0] flex">
                <Link to="/signin" className="ml-2">
                  Sign in
                </Link>
                <RiArrowDropRightFill className="text-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
