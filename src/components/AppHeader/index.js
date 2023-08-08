import React from "react";
import { Badge, Image, Space, Typography } from "antd";
import { MailOutlined, BellFilled } from "@ant-design/icons";
const AppHeader = () => {
  return (
    <div className="AppHeader">
      <Image 
        width={60}
        src="https://t3.ftcdn.net/jpg/03/02/63/58/360_F_302635899_5vymSQOlTKKioY5aYxbP3SHrpFC2IiDE.jpg"
      ></Image>
      <Typography.Title>Shashank's Dashboard</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
};

export default AppHeader;
