import React, { useEffect, useState } from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { toast, ToastContainer } from "react-toastify";
import useApps from "../Hooks/useApps";
import Loader from "../Components/Loader";
import { Link, useParams } from "react-router";
import { addInstall, loadInstalled } from "../Utils/LocalStorage";

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading, error } = useApps();
    const [app, setApp] = useState(null);
    const [installed, setInstalled] = useState(false);

    // Find the matching app after data loads
    useEffect(() => {
        if (apps.length > 0) {
            const found = apps.find((a) => a.id === parseInt(id));
            if (!found) {
                // throw to trigger AppError via Router errorElement
                throw new Response("Not Found", { status: 404, statusText: "App Not Found" });
            }
            setApp(found);

            // check localStorage install
            const installedApps = loadInstalled();
            const isInstalled = installedApps.some((x) => x.id === found.id);
            setInstalled(isInstalled);
        }
    }, [apps, id]);

    const handleInstall = () => {
        if (!app) return;
        addInstall(app);
        toast.success(`${app.title} installed successfully!`);
        setInstalled(true);
    };

    if (loading) return <Loader />;
    if (error)
        throw new Response("Data Load Error", { status: 500, statusText: "Fetch Error" });

    if (!app) return null; // router will show AppError

    return (
        <div className="space-y-10">
            <ToastContainer position="top-center" autoClose={2000} />

            {/* ------------- Top Info ------------- */}
            <section className="flex flex-col md:flex-row gap-10 items-start">
                {/* Left image */}
                <div className="w-full md:w-1/3 bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="object-contain w-full h-64"
                    />
                </div>

                {/* Right side details */}
                <div className="flex-1 space-y-3">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        {app.title}
                    </h1>
                    <p className="text-gray-500">
                        Developed by{" "}
                        <span className="font-medium text-indigo-500">
                            {app.companyName}
                        </span>
                    </p>

                    {/* Stats row */}
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mt-4">
                        <div>
                            Downloads:{" "}
                            <b>{Math.round(app.downloads / 1000000)} M</b>
                        </div>
                        <div>
                            Avg Rating: <b>{app.ratingAvg}</b>
                        </div>
                        <div>
                            Reviews: <b>{app.reviews}</b>
                        </div>
                        <div>
                            Size: <b>{app.size} MB</b>
                        </div>
                    </div>

                    {/* Install button */}
                    <button
                        onClick={handleInstall}
                        disabled={installed}
                        className={`mt-6 px-6 py-2 rounded-md font-medium transition ${installed
                                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                : "bg-gradient-to-r from-green-500 to-teal-500 text-white hover:opacity-90"
                            }`}
                    >
                        {installed ? "Installed" : `Install Now (${app.size}MB)`}
                    </button>
                </div>
            </section>

            {/* ------------- Ratings Chart ------------- */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                    Ratings Breakdown
                </h2>
                <div className="overflow-x-auto">
                    <BarChart
                        width={600}
                        height={300}
                        data={app.ratings}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#FF8C00" barSize={30} />
                    </BarChart>
                </div>
            </section>

            {/* ------------- Description ------------- */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                    Description
                </h2>
                <p className="text-gray-600 leading-relaxed">{app.description}</p>
            </section>
        </div>
    );
};

export default AppDetails;