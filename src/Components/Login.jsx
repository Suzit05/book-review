import React, { useContext, useEffect, useRef, useState } from "react";
import users from "../assets/data/users.json"
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
    const { isloggedin, setisloggedin } = useContext(AuthContext)
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value
        //using find to locate the details
        const userdetail = users.find((user) => (user.email === email && user.password === password))
        if (userdetail) {
            setisloggedin(true)

        }
        else {
            setisloggedin(false)
            alert("Incorrect credentials")


        }

    }

    useEffect(() => {
        console.log("login status:", isloggedin)
    }, [isloggedin])

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-600">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                    Login to Book Review
                </h2>
                <form>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            ref={emailRef}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            ref={passwordRef}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mb-4">
                        <button onClick={handleLogin}
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
                        >
                            Login
                        </button>
                    </div>
                </form>

                {/* Additional Links */}
                <p className="text-sm text-gray-600 text-center">
                    Don't have an account?{" "}
                    <a
                        href="/signup"
                        className="text-blue-500 hover:underline font-medium"
                    >
                        Sign up
                    </a>
                </p>
            </div >
        </div >
    );
};

export default Login;
