import { Descriptions } from "antd";

const AppHeader = () => {
  return (
    <div className="header">
      <Descriptions
        title="Dashboard"
        column={{
          xxl: 4,
          xl: 3,
          lg: 3,
          md: 3,
          sm: 2,
          xs: 1,
        }}
      ></Descriptions>
    </div>
  );
};

export default AppHeader;
