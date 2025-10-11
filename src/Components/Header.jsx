import React from "react";

import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router";
import github from "../assets/github.png"

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">

                {/* Logo */}
                <div
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <img src={logo} alt="HERO.IO Logo" className="w-10 h-10 object-contain" />
                    <h1 className="text-xl font-bold text-indigo-600">HERO.IO</h1>
                </div>
                <nav className="flex items-center gap-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-indigo-600 font-semibold"
                                : "text-gray-700 hover:text-indigo-600 transition"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/AllApps"
                        className={({ isActive }) =>
                            isActive
                                ? "text-indigo-600 font-semibold"
                                : "text-gray-700 hover:text-indigo-600 transition"
                        }
                    >
                        Apps
                    </NavLink>

                    <NavLink
                        to="/myinstall"
                        className={({ isActive }) =>
                            isActive
                                ? "text-indigo-600 font-semibold"
                                : "text-gray-700 hover:text-indigo-600 transition"
                        }
                    >
                        Installation
                    </NavLink>
                </nav>
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium px-6 py-3 rounded-md hover:opacity-90 transition"
                >
                    <img src={github} alt="GitHub logo" className="w-6 h-6" />
                    <span>Contribute</span>
                </a>

            </div>
        </header>
    );
};

export default Header;