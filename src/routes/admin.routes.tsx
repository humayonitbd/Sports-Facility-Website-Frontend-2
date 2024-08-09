import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";

export const dashboardPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

