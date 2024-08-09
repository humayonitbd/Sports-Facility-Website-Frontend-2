import {Outlet} from "react-router-dom";
import { Layout } from "antd";
import AdminSidebar from "./AdminSidebar";

const { Content } = Layout;

const AdminLayout = () => {
    return (
      <Layout style={{ height: "100%" }}>
        <AdminSidebar />
        <Layout>
          {/* <Header>
            {" "}
            <Button onClick={handleLogout}>LogOut</Button>
          </Header> */}
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
};

export default AdminLayout;