import { Menu } from "antd";
import {
  UserOutlined,
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const SideMenu = () => {
  return (
    <div className="menu">
      <Menu
        onClick={(item) => {}}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Inventory",
            icon: <ShopOutlined />,
            key: "/inventory",
          },
          {
            label: "Orders",
            icon: <ShoppingCartOutlined />,
            key: "/orders",
          },
          {
            label: "Customers",
            icon: <UserOutlined />,
            key: "/customers",
          },
        ]}
      ></Menu>
    </div>
  );
};

export default SideMenu;
