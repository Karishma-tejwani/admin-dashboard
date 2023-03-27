import React, { useEffect, useState } from "react";
import { Space, Table, Typography } from "antd";
import getOrders from "./API/getOrders";

const Orders = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoad(true);
    getOrders().then((res) => {
      setData(res.products);
      setLoad(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={3} style={{ textAlign: "center" }}>
        Orders
      </Typography.Title>
      <Table
        loading={load}
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
            dataIndex: "price",
            render: (val) => <span>${val}</span>,
          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
            render: (val) => <span>${val}</span>,
          },
          {
            title: "Total",
            dataIndex: "total",
            render: (val) => <span>${val}</span>,
          },
        ]}
        dataSource={data}
      ></Table>
    </Space>
  );
};

export default Orders;
