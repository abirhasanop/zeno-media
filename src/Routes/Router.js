import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import ComingSoon from "../Shared/ComingSoon";
import ErrorPage from "../Shared/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/coming-soon",
                element: <ComingSoon />
            },
            {
                path: "*",
                element: <ErrorPage />
            }
        ]
    }
])