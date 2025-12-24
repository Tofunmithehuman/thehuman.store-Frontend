import React, { useState, useEffect } from "react";
import email from "../assets/email.svg";
import passwordHide from "../assets/password-hide.svg";
import passwordUnhide from "../assets/password-unhide.svg";
import google from "../assets/google.svg";
import Location from "../components/Location";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    // Email validation
    if (!emailInput) {
      setEmailError('Email is required');
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
      setEmailError('Please enter a valid email');
      hasError = true;
    } else {
      setEmailError('');
    }

    // Password validation
    if (!passwordInput) {
      setPasswordError('Password is required');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (!hasError) {
      // Proceed with login logic here
      console.log('Logging in with:', { email: emailInput, password: passwordInput });
    }
  };

  // Clear error messages after 3 seconds
  useEffect(() => {
    if (emailError || passwordError) {
      const timer = setTimeout(() => {
        setEmailError('');
        setPasswordError('');
      }, 3000);
      return () => clearTimeout(timer); // Cleanup timer on unmount or error change
    }
  }, [emailError, passwordError]);

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-grow">
        <div className="max-w-[1440px] m-auto">
          <div className="Nav">
            <div className="flex items-center justify-between px-4 py-8">
              <Link to="/">
                <h1 className="text-lg text-primary-300 QurovaDEMO">Tixwav</h1>
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
                <h1 className="text-base sm:text-xl text-neutral-600 font-semibold mb-1">Log In</h1>
                <p className="text-[10px] sm:text-sm text-neutral-400">Enter your credentials to access your account</p>
              </div>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-6">
                    <label htmlFor="email" className="relative">
                      <p className="text-xs text-neutral-600 font-semibold mb-1">EMAIL ADDRESS</p>
                      <div className="flex items-center border border-neutral-200 focus-within:border-primary-200 rounded px-4">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={emailInput}
                          onChange={(e) => setEmailInput(e.target.value)}
                          className="w-full focus:outline-none focus:ring-0 py-3 text-xs text-neutral-500 bg-transparent"
                        />
                        <img src={email} alt="email" className="w-4 h-4" />
                      </div>
                      {emailError && (
                        <p className="text-xs text-red-500 mt-1 text-right">{emailError}</p>
                      )}
                    </label>

                    <label htmlFor="password" className="relative">
                      <p className="text-xs text-neutral-600 font-semibold mb-1">PASSWORD</p>
                      <div className="flex items-center border border-neutral-200 focus-within:border-primary-200 rounded px-4">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id="password"
                          value={passwordInput}
                          onChange={(e) => setPasswordInput(e.target.value)}
                          className="w-full focus:outline-none focus:ring-0 py-3 text-xs text-neutral-500 bg-transparent"
                        />
                        <img
                          src={showPassword ? passwordUnhide : passwordHide}
                          alt="toggle password visibility"
                          className="w-4 h-4 cursor-pointer"
                          onClick={togglePasswordVisibility}
                        />
                      </div>
                      {passwordError && (
                        <p className="text-xs text-red-500 mt-1 text-right">{passwordError}</p>
                      )}
                    </label>

                    <div>
                      <label htmlFor="remember">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <input type="checkbox" name="remember" id="remember" />
                            <p className="text-neutral-500 text-xs">Remember me for 30 days</p>
                          </div>
                          <div>
                            <Link to="/forgot-password" className="text-primary-500 text-xs">
                              Forgot Password?
                            </Link>
                          </div>
                        </div>
                      </label>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full bg-primary-500 text-white py-3 rounded text-sm font-semibold hover:bg-primary-600 transition duration-200"
                      >
                        Log into Account
                      </button>
                    </div>
                  </div>
                </form>

                <div className="google-login">
                  <div className="flex items-center justify-center gap-2 mt-6">
                    <div className="w-full h-[1px] bg-neutral-200"></div>
                    <p className="text-sm text-neutral-500">or</p>
                    <div className="w-full h-[1px] bg-neutral-200"></div>
                  </div>

                  <div>
                    <button className="w-full cursor-pointer bg-white border-2 border-neutral-200 text-neutral-500 py-3 rounded text-sm font-semibold hover:bg-neutral-100 transition duration-200 flex items-center justify-center gap-2 mt-4">
                      <img src={google} alt="Google" className="w-4 h-4" />
                      Continue with Google
                    </button>
                  </div>

                  <div>
                    <p className="text-xs text-neutral-500 text-center mt-6">
                      Are you new here?
                      <Link to="/register" className="text-primary-500 text-xs ms-1">
                        Create Account
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

export default Login;