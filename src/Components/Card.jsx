import React from "react";

import downloadIcon from "../assets/icon-downloads.png";
import starIcon from "../assets/icon-ratings.png";      
import { Link } from "react-router";

const Card = ({ app }) => {
    const { id, title, image, downloads, ratingAvg } = app;

    return (
        <div className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition cursor-pointer p-4 flex flex-col">
            <Link to={`/apps/${id}`} className="flex flex-col h-full">

                {/* Image section */}
                <div className="rounded-md bg-gray-100 overflow-hidden h-44 flex items-center justify-center">
                    <img
                        src={image}
                        alt={title}
                        className="object-contain w-full h-full p-2"
                    />
                </div>

                <h3 className="mt-3 text-base font-semibold text-gray-800">
                    {title}
                </h3>

                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md">
                        <img
                            src={downloadIcon}
                            alt="Downloads"
                            className="w-4 h-4 object-contain"
                        />
                        <span className="text-green-500 text-sm font-medium">
                            {Math.round(downloads / 1000000)}M
                        </span>
                    </div>

                    <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-md">
                        <img
                            src={starIcon}
                            alt="Rating"
                            className="w-4 h-4 object-contain"
                        />
                        <span className="text-orange-500 text-sm font-medium">
                            {ratingAvg}
                        </span>
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default Card;