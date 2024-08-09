import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
// import { adminRoutes } from "./admin.routes";
import Home from "../pages/Home/Home/Home";
import { routeGenerator } from "../utils/routeGenerator";
import { mainPaths } from "./main.routes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(mainPaths),
  },
]);

export default router;