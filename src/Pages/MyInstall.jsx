import React, { useEffect, useState } from "react";
import { loadInstalled, removeInstall } from "../Utils/LocalStorage";
import Card from "../Components/Card";
import { toast, ToastContainer } from "react-toastify";
import downloadIcon from '../assets/icon-downloads.png';
import starIcon from "../assets/icon-ratings.png"

const MyInstall = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState("default");

    useEffect(() => {
        const data = loadInstalled();
        setInstalledApps(data);
    }, []);

    // handle uninstall
    const handleUninstall = (id) => {
        removeInstall(id);
        const updated = loadInstalled();
        setInstalledApps(updated);
        toast.info("App uninstalled successfully!");
    };

    // handle sorting 
    const handleSort = (order) => {
        setSortOrder(order);
        const sorted = [...installedApps];

        if (order === "high") {
            sorted.sort((a, b) => b.downloads - a.downloads); 
        } else if (order === "low") {
            sorted.sort((a, b) => a.downloads - b.downloads); 
        }
        setInstalledApps(sorted);
    };

    return (
        <div className="space-y-10">
            <ToastContainer position="top-center" autoClose={2000} />

            <section className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Your Installed Apps
                </h1>
                <p className="text-gray-500 mt-2">
                    Explore all trending apps on the market developed by us
                </p>
            </section>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-700 font-medium">
                    {installedApps.length}Apps Found
                </p>

                <select
                    className="select select-bordered w-full sm:w-56"
                    value={sortOrder}
                    onChange={(e) => handleSort(e.target.value)}
                >
                    <option value="default">Sort By Downloads</option>
                    <option value="high">High → Low</option>
                    <option value="low">Low → High</option>
                </select>
            </div>

            {installedApps.length > 0 ? (
                <div className="space-y-4">
                    {installedApps.map((app) => (
                        <div
                            key={app.id}
                            className="flex flex-col sm:flex-row justify-between items-center bg-white border rounded-lg shadow-sm p-4 hover:shadow-md transition"
                        >
                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="object-contain w-full h-full p-1"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-gray-800">
                                        {app.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm mt-1">
                                        <div className="flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-md">
                                            <img
                                                src={downloadIcon}
                                                alt="Downloads"
                                                className="w-3 h-3"
                                            />
                                            <span className="text-green-500 font-medium">
                                                {Math.round(app.downloads / 1000000)} M
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1 bg-orange-50 px-2 py-0.5 rounded-md">
                                            <img src={starIcon} alt="Rating" className="w-3 h-3" />
                                            <span className="text-orange-500 font-medium">
                                                {app.ratingAvg}
                                            </span>
                                        </div>

                                        <span className="text-gray-500 font-medium">
                                            {app.size} MB
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => handleUninstall(app.id)}
                                className="btn bg-green-500 hover:bg-green-600 text-white mt-3 sm:mt-0 sm:ml-auto"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center mt-20">
                    <p className="text-xl md:text-2xl font-semibold text-gray-700">
                        You have no installed apps yet.
                    </p>
                </div>
            )}
        </div>
    );
};

export default MyInstall;