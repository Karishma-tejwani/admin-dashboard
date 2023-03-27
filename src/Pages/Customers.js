import React, { useEffect, useState } from "react";
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { getUsers } from "./API/getApi";

const Customers = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoad(true);
    getUsers().then((res) => {
      setData(res.products);
      setLoad(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={3} style={{ textAlign: "center" }}>
        Customers
      </Typography.Title>
      <Table
        loading={load}
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (val) => <span>${val}</span>,
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rate) => {
              return <Rate value={rate} allowHalf disabled />;
            },
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },
          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
        ]}
        dataSource={data}
        pagination={{
          pageSize: 6,
        }}
      ></Table>
    </Space>
  );
};

export default Customers;
