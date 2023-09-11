import { RouterProvider, createHashRouter } from "react-router-dom";
import Cookies from "./pages/cookies";
import Landing from "./pages/landing";

const router = createHashRouter([
    {
        path: "/",
        element: <Landing />,
        children: [
            {
                path: "cookies",
                element: <Cookies />,
            },
        ]
    },
]);

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <RouterProvider router={router}></RouterProvider>
            </div>
        </div>
    );
}
