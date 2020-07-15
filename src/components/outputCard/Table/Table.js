import React from "react";
import { Table } from 'antd';
const CustomTable=({data})=>{
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  }
];
const curtainData = data.splice(1).map(elem=>{return{key: elem[0],name:elem[0],price:elem[1]}})

  return(<Table size='small' columns={columns} dataSource={curtainData} style={{maxWidth: 'fit-content'}}/>)
 
  }
  export default CustomTable;