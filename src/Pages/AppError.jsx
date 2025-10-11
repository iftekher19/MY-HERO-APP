import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import appNotFoundImage from '../assets/App-Error.png';
import { useNavigate } from "react-router";

const AppError = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">

            <main className="flex flex-col items-center justify-center text-center flex-1 px-4 py-16">
                <img
                    src={appNotFoundImage}
                    alt="App not found"
                    className="w-64 md:w-80 lg:w-96 mb-8"
                />

                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
                    OOPS!! APP NOT FOUND
                </h1>
                <p className="text-gray-500 mt-2 max-w-md">
                    The app you are requesting is not found on our system. Please try other applications.
                </p>

                <button
                    onClick={() => navigate("/AllApps")}
                    className="mt-6 px-6 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:opacity-90 transition"
                >
                    Go Back!
                </button>
            </main>
        </div>
    );
};

export default AppError;