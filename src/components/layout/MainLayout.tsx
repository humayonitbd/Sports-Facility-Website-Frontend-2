import { Outlet } from "react-router-dom";
import { Image } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import FooterSec from "../../pages/SharedPage/Footer/FooterSec";

const { Header, Content, Footer } = Layout;

const items = new Array(5).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));
const MainLayout = () => {
    return (
      <div>
        <Layout>
          <Header
            style={{
              display: "flex",
              alignItems: "center",
              background: "white",
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              margin: 0,
              padding: "0 100px",
            }}
          >
            <div style={{ marginRight: "10px" }}>
              <Image
                width={200}
                height={50}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                // preview={{
                //   src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                // }}
              />
            </div>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={items}
              style={{ flex: 1, minWidth: 0 }}
            />
          </Header>
          <Content style={{ padding: "0 100px" }}>
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
          <Footer style={{ background: "#061329", padding: "0 100px" }}>
            <FooterSec />
          </Footer>
        </Layout>
      </div>
    );
};

export default MainLayout;