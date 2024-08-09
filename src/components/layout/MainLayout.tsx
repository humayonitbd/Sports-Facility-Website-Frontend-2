import { Outlet } from "react-router-dom";
import { Image } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import FooterSec from "../../pages/SharedPage/Footer/FooterSec";
import { navbarItemGenerator } from "../../utils/navbarItemGenerator";
import MenuBar from "./MenuBar";

const { Header, Content, Footer } = Layout;

const items = new Array(5).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));
const MainLayout = () => {
    return (
      <div>
        <Layout >
          <MenuBar />
          <Content style={{ padding: "0 100px", background:'#fff' }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <div
              style={{
                minHeight: '100vh',
              

                // padding: 28,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ background: "#061329", padding: "0 100px" }}>
            <FooterSec />
          </Footer>
        </Layout>
      </div>
    );
};

export default MainLayout;