import React, { useEffect, useState } from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { toast, ToastContainer } from "react-toastify";
import useApps from "../Hooks/useApps";
import Loader from "../Components/Loader";
import { Link, useParams } from "react-router";
import { addInstall, loadInstalled } from "../Utils/LocalStorage";
import downloads from "../assets/icon-downloads.png"
import rating from "../assets/icon-ratings.png"
import review from "../assets/icon-review.png"

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading, error } = useApps();
    const [app, setApp] = useState(null);
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        if (apps.length > 0) {
            const found = apps.find((a) => a.id === parseInt(id));
            if (!found) {
                throw new Response("Not Found", { status: 404, statusText: "App Not Found" });
            }
            setApp(found);


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

    if (!app) return null;

    return (
        <div className="space-y-10">
            <ToastContainer position="top-center" autoClose={2000} />

            <section className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/3 bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="object-contain w-full h-64"
                    />
                </div>

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

                    <div className="flex flex-col-2 gap-15 sm:grid-cols-3  text-center text-gray-700 mt-6">
                        <div className="flex flex-col items-center">
                            <img src={downloads} alt="Downloads" className="w-6 h-6 mb-2" />
                            <p className="text-sm text-gray-500">Downloads</p>
                            <h3 className="text-xl font-bold text-gray-900">
                                {Math.round(app.downloads / 1000000)} M
                            </h3>
                        </div>
                        <div className="flex flex-col items-center  ">
                            <img src={rating} alt="Average Rating" className="w-6 h-6 mb-2" />
                            <p className="text-sm text-gray-500">Average Ratings</p>
                            <h3 className="text-xl font-bold text-gray-900">{app.ratingAvg}</h3>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src={review} alt="Total Reviews" className="w-6 h-6 mb-2" />
                            <p className="text-sm text-gray-500">Total Reviews</p>
                            <h3 className="text-xl font-bold text-gray-900">
                                {app.reviews.toLocaleString()}K
                            </h3>
                        </div>
                    </div>
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

            {/* --------- Ratings Chart --------- */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 ">
                    Ratings
                </h2>

                <div className="overflow-x-auto bg-gray-50 rounded-lg ">
                    <BarChart
                        width={700}
                        height={300}
                        data={app.ratings}
                        layout="vertical"          
                        margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                    >
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                        <XAxis type="number" />      // numeric values along bottom
                        <YAxis
                            type="category"
                            dataKey="name"
                            width={70}
                            tick={{ fill: "#374151", fontSize: 12 }}
                        />
                        <Tooltip />
                        <Bar
                            dataKey="count"
                            fill="#FF8C00"
                            barSize={30}
                            radius={[0, 8, 8, 0]}     
                        />
                    </BarChart>
                </div>
            </section>

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