import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Layout className="footer">
      <Footer>&copy; copyright Admin Dashboard 2023.</Footer>
    </Layout>
  );
};

export default AppFooter;
