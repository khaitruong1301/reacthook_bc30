import React from 'react'
import {DatePicker,Button} from 'antd'
export default function AntDDemo(props) {


  return (
    <div className='container'>
        Demo antd
        <div>
        <DatePicker />
        <br />
        <Button size='large' block="true">Button click</Button>
        </div>
    </div>
  )
}

