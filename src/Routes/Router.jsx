import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayouts from '../Layouts/MainLayouts';
import AppError from '../Pages/AppError';
import Home from '../Pages/Home';
import AllApps from '../Pages/AllApps';
import AppDetails from '../Pages/AppDetails';
import MyInstall from '../Pages/MyInstall';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        // error handeling modern way
        errorElement: <AppError />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/AllApps",
                element: <AllApps />,
            },
            {
                path: "/Apps/:id",
                element: <AppDetails />
            },
            {
                path: "/MyInstall",
                element: <MyInstall />
            }

        ]
    },

    // Error handeling route
    // {
    //     path: "*",
    //     element: <Error/>
    // }


]);

export default router;