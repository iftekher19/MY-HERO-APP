import React, { useState, useEffect } from "react";
import useApps from "../Hooks/useApps";
import Card from "../Components/Card";
import Loader from "../Components/Loader";

const AllApps = () => {
    const { apps, loading, error } = useApps();
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        if (apps.length > 0) {
            setIsSearching(true);
            const delay = setTimeout(() => {
                const matched = apps.filter((a) =>
                    a.title.toLowerCase().includes(search.toLowerCase())
                );
                setFiltered(matched);
                setIsSearching(false);
            }, 300); 
            return () => clearTimeout(delay);
        }
    }, [search, apps]);

    if (loading)
        return (
            <div className="py-20">
                <Loader />
            </div>
        );

    if (error)
        return (
            <p className="text-center text-red-500 mt-10">
                Failed to load apps 
            </p>
        );

    return (
        <div className="space-y-10">
            <section className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Our All Applications
                </h1>
                <p className="text-gray-500 mt-2">
                    Explore all trending apps on the market developed by us.<br />
                    We code for millions.
                </p>
            </section>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-700 font-medium">
                    ({filtered.length})Apps Found
                </p>

                <input
                    type="text"
                    placeholder="Search Apps"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-bordered w-full sm:w-80"
                />
            </div>


            {isSearching ? (
                <div className="py-10">
                    <Loader /> 
                </div>
            ) : filtered.length > 0 ? (
                <section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filtered.map((app) => (
                            <Card key={app.id} app={app} />
                        ))}
                    </div>
                </section>
            ) : (
                <div className="text-center mt-20 text-lg font-medium text-gray-600">
                    No App Found
                </div>
            )}
        </div>
    );
};

export default AllApps;