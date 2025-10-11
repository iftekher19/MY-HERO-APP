import React from "react";

import errorImage from "../assets/error-404.png";
import { useNavigate } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* ---- Header ---- */}
            <Header />

            {/* ---- Main Content ---- */}
            <main className="flex flex-col items-center justify-center text-center flex-1 px-4 py-16">
                <img
                    src={errorImage}
                    alt="404 Error"
                    className="w-64 md:w-80 lg:w-96 mb-8"
                />

                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Oops, page not found!
                </h1>
                <p className="text-gray-500 mt-2">
                    The page you are looking for is not available.
                </p>

                <button
                    onClick={() => navigate("/")}
                    className="mt-6 px-6 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:opacity-90 transition"
                >
                    Go Back!
                </button>
            </main>

            {/* ---- Footer ---- */}
            <Footer />
        </div>
    );
};

export default Error;