import { Menu } from "antd";
import {
  UserOutlined,
  AppstoreOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [keys, setKeys] = useState("/");

  useEffect(() => {
    const path = location.pathname;
    setKeys(path);
  }, [location.pathname]);

  return (
    <div className="menu">
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[keys]}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Inventory",
            icon: <ShoppingOutlined />,
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
