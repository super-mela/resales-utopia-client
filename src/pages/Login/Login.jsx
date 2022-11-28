import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  AiOutlineEye,
  AiOutlineMail,
  AiTwotoneEyeInvisible,
} from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginLoader from "../../components/loginLoader/LoginLoader";
import TopBanner from "../../components/TopBanner/TopBanner";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useJwtToken from "../../hooks/useToken/useJwtToken";
import ValidationError from "../shared/ValidationError/ValidationError";

const Login = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const { login, googleLogin } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");

  const [token] = useJwtToken(userEmail);

  const [loginLoading, setLoginLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const handleGoogleLogin = () => {
    setLoginLoading(true);
    googleLogin()
      .then((res) => {
        const user = {
          name: res.user.name,
          email: res.user.email,
          userType: "Buyer",
        };
        saveUser(user);
      })
      .catch((err) => toast.error(err.message));

    setLoginLoading(false);
  };

  const saveUser = (user) => {
    axios
      .post("https://resales-utopia-server.vercel.app/users", user)
      .then((res) => {
        setUserEmail(user.email);
        toast.success("Successfully Logged In");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.response.data.message || err.message);
      });
  };

  const handleLogin = (data) => {
    setLoginLoading(true);
    login(data.email, data.password)
      .then((res) => {
        setUserEmail(data.email);
        navigate(from, { replace: true });

        toast.success("Successfully Loggged In");
      })
      .catch((err) => {
        toast.error(err.message);
      });
    setLoginLoading(false);
  };

  return (
    <div className="text-neutral font-urbanist">
      {/* Cover */}
      <TopBanner>Account</TopBanner>

      {/* Login form */}
      <div className="w-full max-w-md bg-white p-8 space-y-3 rounded-sm mx-auto my-10 border-2 text-textPrimary">
        <h1 className="text-2xl font-bold text-center">
          Sign In to Your Account
        </h1>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block ">
              Email
            </label>
            <div className="flex items-center gap-1 px-4 py-3 rounded-md border-gray-700 border">
              <AiOutlineMail />
              <input
                type="email"
                placeholder="Username"
                className="w-full focus:outline-none"
                {...register("email", {
                  required: "Email is required!",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email!",
                  },
                })}
              />
            </div>
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <ValidationError
                        key={type}
                        message={message}
                      ></ValidationError>
                    ))
                  : null;
              }}
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block ">
              Password
            </label>
            <div className="flex items-center gap-1 px-4 py-3 rounded-md border-gray-700 border">
              <RiLockPasswordLine className="h-4 w-4" />
              <input
                type={viewPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full focus:outline-none"
                {...register("password", {
                  required: "Password is required!",
                  validate: {
                    upperCase: (value) =>
                      /.*?[A-Z]/.test(value) ||
                      "Must have at least one uppercase character!",
                    lowerCase: (value) =>
                      /.*?[a-z]/.test(value) ||
                      "Must have at least one lowercase character!",
                    digit: (value) =>
                      /.*?[0-9]/.test(value) || "At least one digit!",
                    specialCharacter: (value) =>
                      /.*?[#?!@$%^&*-]/.test(value) ||
                      "Must have at least one special character!",
                    minlength: (value) =>
                      /.{8,}/.test(value) || "Must be 8 characters long!",
                  },
                })}
              />
              {viewPassword ? (
                <AiTwotoneEyeInvisible
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setViewPassword(!viewPassword)}
                ></AiTwotoneEyeInvisible>
              ) : (
                <AiOutlineEye
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setViewPassword(!viewPassword)}
                />
              )}
            </div>
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <ValidationError
                        key={type}
                        message={message}
                      ></ValidationError>
                    ))
                  : null;
              }}
            />
            <div className="flex justify-end text-xs text-neutral">
              <Link rel="noopener noreferrer" to="/reset">
                Forgot Password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="flex justify-center items-center gap-1 w-full p-3 text-center rounded-sm  bg-primary text-white disabled:bg-gray-500"
            disabled={loginLoading}
          >
            Sign in
            {loginLoading && <LoginLoader />}
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-textPrimary">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleLogin}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>

          <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-textPrimary">
          Don't have an account?{" "}
          <Link
            rel="noopener noreferrer"
            to="/register"
            className="underline text-sm text-primary"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
