import React from "react";
import { Card, Space, Statistic, Typography } from "antd";
import {
  UserOutlined,
  DollarCircleOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Dashboard = () => {
  return (
    <div>
      <Typography.Title level={3}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={<ShoppingCartOutlined />}
          title={"Orders"}
          value={1024}
        />
        <DashboardCard
          icon={<ShoppingOutlined />}
          title={"Inventories"}
          value={2563}
        />
        <DashboardCard
          icon={<UserOutlined />}
          title={"Customers"}
          value={500}
        />
        <DashboardCard
          icon={<DollarCircleOutlined />}
          title={"Revenue"}
          value={150000}
        />
      </Space>
    </div>
  );
};

const DashboardCard = ({ title, value, icon }) => {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};

export default Dashboard;
