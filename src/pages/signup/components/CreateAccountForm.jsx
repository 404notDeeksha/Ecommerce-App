import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogoBlack } from "../../signin/components/Logo";
import { CgFormatItalic } from "react-icons/cg";
import { RiArrowDropRightFill } from "react-icons/ri";
import axios from "axios";

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

  const CheckEmailValidation = (emailDetail) => {
    const backendReqBody = {
      email: emailDetail,
    };

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    if (!emailRegex.test(emailDetail)) {
      setIsEmailValid(false);
      setEmailErrMsg("Enter valid email");
      return false;
    }

    // check if email is already present in database.. throw err
    axios
      .post("http://localhost:8000/api/create", backendReqBody)
      .then((res) => {
        console.log("Data sent successfully", res);
        setIsEmailValid(false);
        setEmailErrMsg("Email already Registered");
      })
      .catch((err) => {
        console.log("Issue sending data", err);
      });
    return true;
  };

  const CheckPasswordValidation = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setIsPasswordValid(false);
    }
    return passwordRegex.test(password);
  };

  const CheckPasswordDuplicacy = (password, passwordAgain) => {
    if (password !== passwordAgain) {
      setIsPasswordDuplicate(false);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const backendReqBody = {
      name: nameDetail,
      email: email,
      password: password,
    };

    const emailCheck = CheckEmailValidation(email);
    const passwordCheck = CheckPasswordValidation(password);
    const passwordDuplicationCheck = CheckPasswordDuplicacy(
      password,
      passwordAgain
    );
    console.log("E", emailCheck);
    console.log("PC", passwordCheck);
    console.log("PDC", passwordDuplicationCheck);

    // check and send port backend is working on
    if (emailCheck && passwordCheck && passwordDuplicationCheck) {
      console.log("Data Logging successfully");
      axios
        .post("http://localhost:8000/api/", backendReqBody)
        .then((res) => {
          console.log("Data sent successfully", res);
        })
        .catch((err) => {
          console.log("Issue sending data", err);
        });
      // navigate to /home (private) page with looged in session with local storage
      navigate("/", { state: { name: nameDetail, email: email } });
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
              {/* start password encoding - coding */}

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
