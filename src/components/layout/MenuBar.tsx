import { Image } from "antd";
import {  Layout, Menu } from "antd";
import { navbarItemGenerator } from "../../utils/navbarItemGenerator";
import { mainPaths } from "../../routes/main.routes";
const { Header} = Layout;

const userRole = {
    ADMIN: 'admin',
    USER: 'user',
}
const MenuBar = () => {
    const user = {
        role:'user',
    }
     let navbarItems;

     switch (user?.role) {
       case userRole.ADMIN:
         navbarItems = navbarItemGenerator(mainPaths);
         break;
       case userRole.USER:
         navbarItems = navbarItemGenerator(mainPaths);
         break;
       
       default:
         break;
     }
  return (
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
        padding: "50px 100px",
        // borderBottom: "3px solid #0566FF",
        boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
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
        items={navbarItems}
        style={{ flex: 1, minWidth: 0, borderBottom: "none" }}
      />
    </Header>
  );
};

export default MenuBar;
