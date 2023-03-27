import React, { useEffect, useState } from "react";
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { getUsers } from "./API/getApi";

const Customers = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoad(true);
    getUsers().then((res) => {
      setData(res.users);
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
            title: "Image",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },
          {
            title: "Address",
            dataIndex: "address",
            render: (add) => {
              return (
                <span>
                  {add.address},{add.city}
                </span>
              );
            },
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
