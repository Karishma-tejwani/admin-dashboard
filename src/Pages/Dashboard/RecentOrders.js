import React, { useEffect, useState } from "react";
import { Table, Typography } from "antd";
import { getOrders } from "../API/getApi";

const RecentOrders = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    getOrders().then((res) => {
      setData(res.products.splice(0, 3));
      setLoad(false);
    });
  }, []);

  return (
    <>
      <Typography.Title level={5} style={{ textAlign: "center" }}>
        Recent Orders
      </Typography.Title>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={load}
        dataSource={data}
        pagination={false}
      ></Table>
    </>
  );
};

export default RecentOrders;
