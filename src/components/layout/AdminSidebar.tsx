import { Layout, Menu } from "antd";
import {  dashboardPaths } from "../../routes/admin.routes";

import { NavLink } from "react-router-dom";
import { navbarItemGenerator } from "../../utils/navbarItemGenerator";

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const { Sider } = Layout;
const AdminSidebar = () => {
//   const user = useAppSelector(selectCurrentUser);
const user = {
    role:'user'
}

  let sidebarItems;

  switch (user?.role) {
    case userRole.ADMIN:
      sidebarItems = navbarItemGenerator(dashboardPaths);
      break;
    case userRole.USER:
      sidebarItems = navbarItemGenerator(dashboardPaths);
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NavLink to="/dashboard">
          <h1 style={{ color: "white" }}>Dashboard</h1>
        </NavLink>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default AdminSidebar;
