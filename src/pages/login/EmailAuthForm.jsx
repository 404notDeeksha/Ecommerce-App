import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyEmail } from "../../api/auth";
import { routes } from "../../routes/routes";
import { useDispatch } from "react-redux";
import { loading } from "../../redux/slices/loaderSlice";

export const EmailAuthForm = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loading(true));
    try {
      const result = await verifyEmail({ email });
      if (result.success) {
        console.log("Account is present");
        dispatch(loading(false));
        navigate(routes.loginPassword, { state: email }); // navigating to PasswordAuthPage
      }
    } catch (err) {
      dispatch(loading(false));
      console.log("Account not Registered", err);
      setErrorMsg("Account not Registered!");
    }
  };
  return (
    <>
      <div className="rounded-lg border-[1px] border-[#ddd] py-5 px-6 mb-[22px] w-[350px] m-auto text-xs leading-5">
        <h1 className="font-normal mb-3.5 text-[28px] leading-5 ">Sign in</h1>

        <div className="text-sm text-gray-500 my-4">
          <div>Guest Login: guest@user.com</div>
          <div>Guest password: Guest@123</div>
        </div>

        <form className="my-2.5 " onSubmit={(e) => handleSubmit(e)}>
          <label className="font-bold">Email</label>

          <input
            type="text"
            name="email"
            className="w-full px-2 py-1 border-2 border-black border-solid mt-2 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {errorMsg && <div className="text-red-600">{errorMsg}</div>}
          <button
            type="submit"
            className="bg-[#FFD814] text-xs px-1.5 py-[1px] h-[29px] leading-5 rounded-lg w-full "
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
};
