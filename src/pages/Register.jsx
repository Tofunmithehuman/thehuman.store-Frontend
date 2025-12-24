import React, { useState } from "react";
import email from "../assets/email.svg";
import passwordHide from "../assets/password-hide.svg";
import passwordUnhide from "../assets/password-unhide.svg";
import google from "../assets/google.svg";
import Location from "../components/Location";
import { Link } from "react-router";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-grow">
        <div className="max-w-[1440px] m-auto">
          <div className="Nav">
            <div className="flex items-center justify-between px-4 py-8">
              <Link to="/">
                <h1 className="text-lg text-primary-300 QurovaDEMO">Tickverse</h1>
              </Link>
              <div className="flex items-center">
                <Location
                  textColorClass="text-neutral-600"
                  textSizeClass="text-sm"
                  textWeightClass="font-semibold"
                />
              </div>
            </div>
          </div>

          <div className="Auth flex justify-center sm:items-center sm:min-h-[calc(100vh-104px)]">
            <div className="w-11/12 max-w-[400px] p-4 sm:p-0 bg-white overflow-auto">
              <div className="text-center">
                <h1 className="text-base sm:text-xl text-neutral-600 font-semibold mb-1">Register</h1>
                <p className="text-[10px] sm:text-sm text-neutral-400">Enter your credentials to create your account</p>
              </div>

              <div className="mt-10">
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <label className="w-full">
                        <p className="text-xs text-neutral-600 font-semibold mb-1">FIRST NAME</p>
                        <div className="border border-neutral-200 focus-within:border-primary-200 rounded px-4">
                          <input
                            type="text"
                            name="FirstName"
                            id="FirstName"
                            className="w-full focus:outline-none focus:ring-0 py-3 text-xs text-neutral-500 bg-transparent"
                          />
                        </div>
                      </label>

                      <label className="w-full">
                        <p className="text-xs text-neutral-600 font-semibold mb-1">LAST NAME</p>
                        <div className="border border-neutral-200 focus-within:border-primary-200 rounded px-4">
                          <input
                            type="text"
                            name="LastName"
                            id="LastName"
                            className="w-full focus:outline-none focus:ring-0 py-3 text-xs text-neutral-500 bg-transparent"
                          />
                        </div>
                      </label>
                    </div>

                    <label>
                      <p className="text-xs text-neutral-600 font-semibold mb-1">EMAIL ADDRESS</p>
                      <div className="flex items-center border border-neutral-200 focus-within:border-primary-200 rounded px-4">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="w-full focus:outline-none focus:ring-0 py-3 text-xs text-neutral-500 bg-transparent"
                        />
                        <img src={email} alt="email" className="w-4 h-4" />
                      </div>
                    </label>

                    <label>
                      <p className="text-xs text-neutral-600 font-semibold mb-1">PASSWORD</p>
                      <div className="flex items-center border border-neutral-200 focus-within:border-primary-200 rounded px-4">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id="password"
                          className="w-full focus:outline-none focus:ring-0 py-3 text-xs text-neutral-500 bg-transparent"
                        />
                        <img
                          src={showPassword ? passwordUnhide : passwordHide}
                          alt="toggle password visibility"
                          className="w-4 h-4 cursor-pointer"
                          onClick={togglePasswordVisibility}
                        />
                      </div>
                    </label>

                    <div>
                      <button className="w-full bg-primary-500 text-white py-3 rounded text-sm font-semibold hover:bg-primary-600 transition duration-200">
                        Get started
                      </button>
                    </div>
                  </div>
                </form>

                <div className="google-Register">
                  <div className="flex items-center justify-center gap-2 mt-6">
                    <div className="w-full h-[1px] bg-neutral-200"></div>
                    <p className="text-sm text-neutral-500">or</p>
                    <div className="w-full h-[1px] bg-neutral-200"></div>
                  </div>

                  <div>
                    <button className="w-full cursor-pointer bg-white border-2 border-neutral-200 text-neutral-500 py-3 rounded text-sm font-semibold hover:bg-neutral-100 transition duration-200 flex items-center justify-center gap-2 mt-4">
                      <img src={google} alt="Google" className="w-4 h-4" />
                      Register with Google
                    </button>
                  </div>

                  <div>
                    <p className="text-xs text-neutral-500 text-center mt-6">
                      Already have an account?
                      <Link to="/login" className="text-primary-500 text-xs ms-1">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;