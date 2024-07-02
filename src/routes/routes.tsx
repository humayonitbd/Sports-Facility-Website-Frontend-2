import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { adminRoutes } from "./admin.routes";
import Home from "../pages/Home/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    index:true,
    element: <Home />,
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
  
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;