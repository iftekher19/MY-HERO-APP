import React from "react";

const Loader = () => {
    const skeletons = Array.from({ length: 6 });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {skeletons.map((_, index) => (
                <div
                    key={index}
                    className="flex w-52 flex-col gap-4 mx-auto bg-white border rounded-lg p-4 shadow-sm"
                >
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            ))}
        </div>
    );
};

export default Loader;