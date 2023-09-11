import { RouterProvider, createHashRouter } from "react-router-dom";
import Cookies from "./pages/cookies";
import Landing from "./pages/landing";

const router = createHashRouter([
    {
        path: "/cookies",
        element: <Cookies />,
    },
    {
        path: "/",
        element: <Landing />,
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
