import dashboard from "../Assets/dashboard.png";
import { MailOutlined, BellOutlined } from "@ant-design/icons";
import { Badge, Image, Space, Typography } from "antd";
const { Title } = Typography;

const Header = () => {
  return (
    <div className="header">
      <Image width={50} src={dashboard} />
      <Title>Admin Dashboard</Title>
      <Space>
        <Badge count={3}>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={8}>
          <BellOutlined style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
};

export default Header;
