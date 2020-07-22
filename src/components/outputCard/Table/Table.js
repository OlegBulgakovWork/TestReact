import React, { useState, useEffect } from "react";
import { Table, Dropdown, Button, Menu, Radio, InputNumber } from 'antd';
import './style.css'

const CustomTable = ({ data }) => {
  const containData = data.slice(1).map(elem => { return { key: elem[0], name: elem[0], price: elem[1] } }).filter(e => e.price)
  useEffect(() => {

    setOrder(containData)
  }, [containData]);

  const [order, setOrder] = useState(containData)
  const [filter, setFilter] = useState('more')
  const [showFilter, setShowFilter] = useState(false)
  const [lowThreshold, setLowThreshold] = useState(0)
  const [highThreshold, setHighThreshold] = useState(0)

  const orderBy = ({ key }) => {
    const orderedBy = key === 'name' ? order.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
      :
      order.sort(function (a, b) {
        return a.price - b.price;
      });
    setOrder([...orderedBy])
  }

  const menu = (
    <Menu onClick={orderBy} >
      <Menu.Item key="name">Name</Menu.Item>
      <Menu.Item key="price">Price</Menu.Item>

    </Menu>
  );

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    }
  ];

  const pagination = {
    pageSize: 4,
  }

  const handleChange = (e) => {

    setFilter(e.target.value)
  }

  const handleFilter = () => {
    if (filter === 'more') {
      const more = containData.filter(elem => +elem.price > lowThreshold)
      setOrder([...more])
    }
    if (filter === 'less') {
      const less = containData.filter(elem => +elem.price < lowThreshold)
      setOrder([...less])
    }
    if (filter === 'equal') {
      const eq = containData.filter(elem => +elem.price >= lowThreshold && +elem.price <= highThreshold)
      setOrder([...eq])
    }
  }

  return (
    <div className='table'>
      <Button onClick={() => setShowFilter(!showFilter)} style={{ minWidth: 130, margin: 10 }}>Filter..</Button>
      <Dropdown overlay={menu} placement="bottomLeft"  >
        <Button style={{ minWidth: 130, margin: 10 }}>Order by</Button>
      </Dropdown >
      {showFilter && <><Radio.Group onChange={handleChange} defaultValue="a" size="small" style={{ margin: '1rem' }}>
        <Radio.Button style={{ margin: '0 1rem' }} value="more">More than</Radio.Button>
        <Radio.Button style={{ margin: '0 1rem' }} value="less">Less than</Radio.Button>
        <Radio.Button style={{ margin: '0 1rem' }} value="equal">Within</Radio.Button>
      </Radio.Group>
        <div className='input-filter'>
          <Button size='small' style={{ margin: '0 1rem' }} onClick={handleFilter}>Apply filter</Button>
          <InputNumber size='small' defaultValue={0} onChange={(value) => setLowThreshold(value)} style={{ margin: '0 0.5rem' }} />
          {filter === 'equal' && <InputNumber size='small' defaultValue={0} onChange={(value) => setHighThreshold(value)} style={{ margin: '0 1rem' }} />}
        </div></>}

      <Table pagination={pagination} size='small' columns={columns} dataSource={order} style={{ minWidth: 250 }} />
    </div>

  );
}
export default CustomTable;