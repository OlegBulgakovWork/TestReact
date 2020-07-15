import React from "react";
import { Menu, Dropdown, message,Button } from "antd";

const CustomDropdown = ({name,setGender}) => {
  const onClick = ({ key }) => {
    setGender(key)
  };

  const menu = (
    <Menu onClick={onClick} style={{ minWidth: 170 }}>
      <Menu.Item key="Male">Male</Menu.Item>
      <Menu.Item key="Female">Female</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} placement="bottomLeft" style={{minWidth:170}} >
      <Button style={{ minWidth: 170, textAlign:'left' }}>{name}</Button>
    </Dropdown>
  );
};

export default CustomDropdown;
