import { Outlet } from "react-router-dom";
import {  Layout, Grid  } from "antd";
import FooterSec from "../../pages/SharedPage/Footer/FooterSec";

import MenuBar from "./MenuBar";

const {  Content, Footer } = Layout;
const { useBreakpoint } = Grid;


const MainLayout = () => {
   const screens = useBreakpoint();
    const contentPadding = screens.md ? "0 100px" : "0 0";
    return (
      <div>
        <Layout>
          <MenuBar />
          <Content style={{ padding: contentPadding, background: "#fff" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <div
              style={{
                minHeight: "100vh",

                // padding: 28,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ background: "#061329", padding: contentPadding }}>
            <FooterSec />
          </Footer>
        </Layout>
      </div>
    );
};

export default MainLayout;