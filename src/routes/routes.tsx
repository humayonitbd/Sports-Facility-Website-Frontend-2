import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routeGenerator";
import { mainPaths } from "./main.routes";
import AdminLayout from "../components/layout/AdminLayout";
import { dashboardPaths } from "./admin.routes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(mainPaths),
  },
  {
    path: "/home",
    element: <App />,
    children: routeGenerator(mainPaths),
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: routeGenerator(dashboardPaths),
  },
]);

export default router;