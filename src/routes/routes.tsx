import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routeGenerator";
import { mainPaths } from "./main.routes";


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
]);

export default router;