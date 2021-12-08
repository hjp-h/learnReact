import React, { Component } from 'react';
import {Button,DatePicker} from 'antd'
import {WechatOutlined,SearchOutlined} from '@ant-design/icons'
const { RangePicker } = DatePicker;

export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>&nbsp;&nbsp;
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button><br></br>
        <WechatOutlined style={{fontSize:'24px'}}/><br/>
        <DatePicker/>
        <RangePicker/>
      </div>
    );
  }
}
