import React, { useEffect, useState } from "react";
import { loadInstalled, removeInstall } from "../Utils/LocalStorage";
import Card from "../Components/Card";
import { toast, ToastContainer } from "react-toastify";

const MyInstall = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState("default");

    // load on mount
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

            {/* ------------- Title ------------- */}
            <section className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Your Installed Apps
                </h1>
                <p className="text-gray-500 mt-2">
                    Explore all trending apps you've installed from HERO.IO
                </p>
            </section>

            {/* ------------- Count and Sort ------------- */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-700 font-medium">
                    {installedApps.length} Apps Found
                </p>

                <select
                    className="select select-bordered w-full sm:w-56"
                    value={sortOrder}
                    onChange={(e) => handleSort(e.target.value)}
                >
                    <option value="default">Sort by Size</option>
                    <option value="high">High → Low</option>
                    <option value="low">Low → High</option>
                </select>
            </div>

            {/* ------------- Installed Apps List ------------- */}
            {installedApps.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {installedApps.map((app) => (
                        <div
                            key={app.id}
                            className="relative border rounded-lg shadow-sm bg-white p-4"
                        >
                            {/* Re‑use your Card */}
                            <Card app={app} />

                            <button
                                onClick={() => handleUninstall(app.id)}
                                className="btn btn-sm bg-red-500 hover:bg-red-600 text-white mt-3 w-full"
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