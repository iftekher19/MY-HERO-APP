import React from "react";

import useApps from "../Hooks/useApps";
import Loader from "../Components/Loader";
import Card from "../Components/Card";
import { Link } from "react-router";
import hero from '../assets/hero.png'
import apple from "../assets/game.png"
import google from "../assets/app.png"

const Home = () => {
    const { apps, loading, error } = useApps();

    if (loading) return <Loader />;
    if (error) return <p className="text-red-500">Failed to load data </p>;

    const trendingApps = apps.slice(0, 8);

    return (
        <div className="space-y-16">
            <section className="text-center flex flex-col items-center justify-center mt-10">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    We Build{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
                        Productive Apps
                    </span>
                </h1>
                <p className="max-w-2xl text-gray-600 mt-4">
                    At HERO.IO, we craft innovative apps designed to make everyday
                    life simpler, smarter, and more exciting. Our goal is to turn your
                    ideas into digital experiences that truly make an impact.
                </p>

                {/* Store buttons */}
                <div className="flex items-center gap-4 mt-6">
                    {/* <img src={} /> */}
                    <a
                        href="https://play.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex px-5 py-3 gap-2 bg-white text-black rounded-md hover:opacity-70 hover:bg-indigo-400 transition"
                    >
                        <span> <img className="w-6 h-6 " src={google} /> </span>  Google Play
                    </a>
                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex px-5 py-3  gap-2 bg-white text-black rounded-md hover:opacity-70 hover:bg-indigo-400 transition"
                    >
                      <span> <img className="w-6 h-6 " src={apple}/> </span>  App Store
                    </a>
                </div>
                <div className="mt-6 py">
                    <img
                        src={hero}
                        alt="App showcase"
                        className="relative top-10 md:top-16 max-w-[320px] md:max-w-md mx-auto drop-shadow-2xl"
                    />
                </div>
            </section>

            {/* state part */}
            <section className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg py-12">
                <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
                    <div>
                        <h3 className="text-3xl font-bold">29.6M</h3>
                        <p className="opacity-90">Total Downloads</p>
                        <p className="text-xs opacity-75 mt-1">21% More Than Last Month</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">906K</h3>
                        <p className="opacity-90">Total Reviews</p>
                        <p className="text-xs opacity-75 mt-1">46% More Than Last Month</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">132 +</h3>
                        <p className="opacity-90">Active Apps</p>
                        <p className="text-xs opacity-75 mt-1">31 More Will Launch</p>
                    </div>
                </div>
            </section>

            {/* trendings part */}
            <section className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Trending Apps
                </h2>
                <p className="text-gray-500 mt-2">
                    Explore all trending apps on the market developed by us
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {trendingApps.map((app) => (
                        <Card key={app.id} app={app} />
                    ))}
                </div>

                {/* Show All button */}
                <div className="mt-10">
                    <Link
                        to="/AllApps"
                        className="px-6 py-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:opacity-90 transition"
                    >
                        Show All
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;