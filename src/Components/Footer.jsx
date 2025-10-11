import React from "react";
import logo from "../assets/logo.png";
import twitter from "../assets/twitter.png"
import linkdin from "../assets/linkk.png"
import facebook from "../assets/fb.png"

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0B1120] text-gray-300 pt-10 pb-5 mt-auto">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-gray-700">

                    <div className="flex items-center gap-3">
                        <img src={logo} alt="HERO.IO logo" className="w-10 h-10 object-contain" />
                        <h2 className="text-lg font-semibold text-white tracking-wide">
                            HERO.IO
                        </h2>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2">
                        <h3 className="font-medium text-sm text-white">Social Links</h3>
                        <div className="flex items-center gap-4">
                            <img className="h-6 w-6" src={twitter}/>
                            <img className="h-6 w-6 " src={linkdin} />
                            <img className="h-6 w-6 " src={facebook} />
                            
                        </div>
                    </div>
                </div>

                <div className="text-center text-sm text-gray-400 mt-5">
                    Copyright © {year} - All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;