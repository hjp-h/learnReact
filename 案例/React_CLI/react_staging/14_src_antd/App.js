import React, { Component } from 'react';
import {Button,DatePicker,Cascader} from 'antd'
import {WechatOutlined,SearchOutlined} from '@ant-design/icons'
const { RangePicker } = DatePicker;

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
/*
const options1 = [
  {
    "fieldType": "cascader",
    "id": "showCity",
    "display": "省市区联动",
    "options": [
      {
        "id": "province",
        "display": "Zhejiang",
        "key": "Zhejiang",
        "children":[{
          "fieldType": "cascader",
          "id": "showcity",
          "display": "showHangzhou",
          "key": "showHangzhou",
          "options":[
            {
              "id": "city",
              "display": "Hangzhou",
              "key": "Hangzhou",
              "children":[{
                "fieldType": "cascader",
                "id": "showcountry",
                "display": "showXihu",
                "key": "showXihu",
                "options":[
                  {
                    "id": "city",
                    "display": "xihu",
                    "key": "xihu",
                    "children":[{
                      "fieldType": "cascader",
                      "id": "country",
                      "display": "showCountry",
                      "key": "showCountry",
                      "options":null
                    }]
                  }]
              }]
            }
          ]
        }]
      }
    ]
  }
]*/
export default class App extends Component {
  onChange= value => console.log(value); 
  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>&nbsp;&nbsp;
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button><br></br>
        <WechatOutlined style={{fontSize:'24px'}}/><br/>
        <DatePicker/>
        <RangePicker/><br/>
        <Cascader options={options} onChange={this.onChange} placeholder="Please select" /><br/>
      </div>
    );
  }
}
