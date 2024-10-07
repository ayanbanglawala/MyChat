import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";

const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    username: "",
    password: "",
    cPassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInput({ ...input, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(input);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-blue-500">MeChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            {/* Full Name Field */}
            <div>
              <label className="label">
                <span className="text-base label-text">Full Name</span>
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Full Name"
                  value={input.fullName}
                  onChange={(e) => setInput({ ...input, fullName: e.target.value })}
                />
              </label>
            </div>

            {/* Username Field */}
            <div>
              <label className="label">
                <span className="text-base label-text">Username</span>
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Username"
                  value={input.username}
                  onChange={(e) => setInput({ ...input, username: e.target.value })}
                />
              </label>
            </div>

            {/* Password Field */}
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0                -2-2Zm-5.146 7.854 1.414 1.414L6.414 13H5v-.414l1.854-1.854Z"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Enter Password"
                  value={input.password}
                  onChange={(e) => setInput({ ...input, password: e.target.value })}
                />
              </label>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="label">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Zm-5.146 7.854 1.414 1.414L6.414 13H5v-.414l1.854-1.854Z"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Re-enter Password"
                  value={input.cPassword}
                  onChange={(e) => setInput({ ...input, cPassword: e.target.value })}
                />
              </label>
            </div>
          </div>

          {/* Gender Selection */}
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectGender={input.gender} />

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary mt-4 w-full text-white"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          <p className="mt-3 text-sm text-center text-gray-300">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
