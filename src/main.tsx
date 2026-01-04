import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import {Menu} from "./pages";
import './index.css';
import {Game} from "./pages/game";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Menu,
    },
    {
        path: "/game",
        Component: Game,
    },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
);
