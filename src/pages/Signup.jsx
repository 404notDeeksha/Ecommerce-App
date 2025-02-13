import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogoBlack } from "./login/LogoBlack";
import { RiArrowDropRightFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../api/auth";
import { FiEye } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa6";
import { loginSuccess } from "../redux/slices/authSlice";
import { routes } from "../routes/routes";

export const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home);
    }
  }, [isAuthenticated, navigate]);

  const validateEmail = (email) =>
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const validatePassword = (password) => {
    if (password.length < 8) return "Too short";
    if (!/(?=.*[A-Z])/.test(password)) return "Add uppercase letter";
    if (!/(?=.*\d)/.test(password)) return "Add a number";
    if (!/(?=.*[@$!%*?&])/.test(password)) return "Add special character";
    return "Strong";
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    if (name === "password") setPasswordStrength(validatePassword(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!validateEmail(formData.email))
      newErrors.email = "Invalid email format";
    if (passwordStrength !== "Strong") newErrors.password = passwordStrength;
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    if (!Object.keys(newErrors).length) {
      try {
        const result = await signupUser({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        if (result.success) {
          console.log("Account created");
          dispatch(loginSuccess({ user: result.data }));
          navigate(routes.home);
        }
      } catch (error) {
        if (error.message) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: error.message,
          }));
        }
      }
    }
  };

  return (
    <>
      <div className="bg-white h-screen text-black">
        <div className="pt-3.5 px-[18px] pb-[22px]">
          <LogoBlack />
          <div className="rounded-lg border border-[#ddd] p-6 mb-[22px] w-[350px] m-auto text-xs ">
            <h1 className="font-normal mb-6 text-[28px] ">Create Account</h1>

            <form
              className="flex flex-col gap-y-4 my-2"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-y-1">
                <label className="block font-bold ">Your name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 border-2 border-black border-solid"
                  placeholder="First and last name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col gap-y-1">
                <label className="font-bold">Email</label>

                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border-2 border-black border-solid"
                  value={formData.email}
                  required
                  onChange={handleChange}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col gap-y-1">
                <label className="block font-bold">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="w-full p-2 border-2 border-black border-solid"
                    placeholder="At least 6 characters"
                    value={formData.password}
                    required
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FiEye />}
                  </button>
                </div>
                {passwordStrength && (
                  <p
                    className={`text-sm ${
                      passwordStrength === "Strong"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {passwordStrength}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-y-1">
                <label className="font-bold block">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full p-2 border-2 border-black border-solid"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-[#FFD814] text-xs p-2 rounded-lg w-full my-4 "
              >
                Create your amazon account
              </button>
            </form>

            <div className="my-5 text-xs">
              By creating an account or logging in, you agree to Amazon’s
              Conditions of Use and Privacy Policy.
            </div>

            <div className="my-2 flex">
              Already have an account?
              <div className="text-[#0066c0] flex flex-row gap-2">
                <Link to={routes.loginEmail} className="ml-2">
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
