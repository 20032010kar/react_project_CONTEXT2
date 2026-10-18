import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import React from "react";

import HomePage from "./pages/home.js";
import WindowPage from "./pages/WindowPage.js";
import RootLayout from "./root_layout.js";
import { WindowSizeProvider } from "./context/WindowSize.js";
import TooglePage from "./pages/TooglePage.js";
import OnlinePage from "./pages/OnlinePage.js";
import PreviousPage from "./pages/PreviousPage.js";
import OutsidePage from "./pages/OutsidePage.js";

const NotFoundPage = () => (
    <div>
        <h1 className="text-7xl text-red-950 uppercase font-bold">404 Not Found. </h1>
        <Link to='/'>Go home</Link>
    </div>
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'window',
                element: <WindowPage />
            },
            {
                path:'toogle',
                element:<TooglePage/>
            },
            {
                path:'online',
                element:<OnlinePage/>
            },
            {
                path:'previous',
                element:<PreviousPage/>
            },
            {
                path:'outside',
                element:<OutsidePage/>
            }

        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]);

const App: React.FC = () => {
    return (
        <WindowSizeProvider>
            <RouterProvider router={router} />
        </WindowSizeProvider>
    );
};

export default App;