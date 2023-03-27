import dashboard from "../Assets/dashboard.png";
import { MailOutlined, BellOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../Pages/API/getApi";
const { Title } = Typography;

const Header = () => {
  const [comments, setComments] = useState([]);
  const [notify, setNotify] = useState([]);
  const [openComments, setOpencomments] = useState(false);
  const [openNotifications, setOpennotifications] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });

    getOrders().then((res) => {
      setNotify(res.products);
    });
  }, []);

  return (
    <div className="header">
      <Image width={50} src={dashboard} />
      <Title>Record Master</Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setOpencomments(true);
            }}
          />
        </Badge>
        <Badge count={notify.length}>
          <BellOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setOpennotifications(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={openComments}
        onClose={() => {
          setOpencomments(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(itm) => {
            return <List.Item>{itm.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={openNotifications}
        onClose={() => {
          setOpennotifications(false);
        }}
        maskClosable
      >
        <List
          dataSource={notify}
          renderItem={(itm) => {
            return (
              <List.Item>
                <Typography.Text strong>{itm.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
};

export default Header;
