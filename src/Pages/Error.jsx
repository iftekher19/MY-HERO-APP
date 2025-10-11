import React from "react";

import errorImage from "../assets/error-404.png";
import { useNavigate } from "react-router";

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-50">
            {/* 404 Illustration */}
            <img
                src={errorImage}
                alt="404 Error"
                className="w-72 md:w-96 mb-8"
            />

            {/* Message */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Oops, page not found!
            </h1>
            <p className="text-gray-500 mt-2">
                The page you are looking for is not available.
            </p>

            {/* Go Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="mt-6 px-6 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:opacity-90 transition"
            >
                Go Back!
            </button>
        </div>
    );
};

export default Error;