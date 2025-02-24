import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";

export const mainPaths = [
  {
    name: "Home",
    path: "home",
    element: <Home />,
  },

  {
    name: "Login",
    path: "login",
    element: <Login />,
  },
  {
    name: "Register",
    path: "register",
    element: <Register />,
  },
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminLayout />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        // element: <CreateStudent />,
      },
    ],
  },
];