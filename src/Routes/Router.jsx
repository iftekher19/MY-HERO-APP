import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayouts from '../Layouts/MainLayouts';
import AppError from '../Pages/AppError';
import Home from '../Pages/Home';
import AllApps from '../Pages/AllApps';
import AppDetails from '../Pages/AppDetails';
import MyInstall from '../Pages/MyInstall';
import Error from '../Pages/Error'

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        // error handeling modern way
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/AllApps",
                element: <AllApps />,
                errorElement: <AppError />,
            },
            {
                path: "/Apps/:id",
                element: <AppDetails />,
                errorElement: <AppError />,
            },
            {
                path: "/MyInstall",
                element: <MyInstall />,
                errorElement: <AppError />,
            }

        ]
    },
    // {
    //     path: "*",
    //     element: <Error /> // <--- catches unknown paths / 404
    // }

    // Error handeling route
    // {
    //     path: "*",
    //     element: <Error/>
    // }


]);

export default router;