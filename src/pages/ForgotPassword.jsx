import React, { useState, useEffect } from 'react';
import email from '../assets/email.svg';
import Location from '../components/Location';
import { Link } from 'react-router';

function ForgotPassword() {
    const [emailInput, setEmailInput] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailInput) {
            setEmailError('Email is required');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
            setEmailError('Please enter a valid email');
        } else {
            setEmailError('');
            // Proceed with sending OTP logic here
            console.log('Sending OTP to:', emailInput);
        }
    };

    // Clear error message after 3 seconds
    useEffect(() => {
        if (emailError) {
            const timer = setTimeout(() => {
                setEmailError('');
            }, 3000);
            return () => clearTimeout(timer); // Cleanup timer on unmount or error change
        }
    }, [emailError]);

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
                                <h1 className="text-base sm:text-xl text-neutral-600 font-semibold mb-1">Forgot Password</h1>
                                <p className="text-[10px] sm:text-sm text-neutral-400">Enter your email to reset your password</p>
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

                                        <div>
                                            <button
                                                type="submit"
                                                className="w-full bg-primary-500 text-white py-3 rounded text-sm font-semibold hover:bg-primary-600 transition duration-200"
                                            >
                                                Send OTP
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                <div className="text-center mt-6">
                                    <Link to="/register" className="text-primary-500 text-xs">
                                        Back to register
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ForgotPassword;