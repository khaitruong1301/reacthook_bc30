import React from 'react'
import { useState } from 'react'

export default function BaiTapChonXe() {

  const [img,setImg] = useState('./img/products/red-car.jpg');

  const handleChangeColor = (color) => {
    setImg(`./img/products/${color}-car.jpg`);
  }

  return (
    <div>
        <h3>Bài tập chọn xe</h3>
        <div className='row'>
            <div className='col-6'>
                <img src={img} alt='car' className='w-100' />
            </div>
            <div className='col-6'>
                <button className='btn mx-2' style={{background:'red',color:'#fff'}} onClick={()=>{
                        handleChangeColor('red');
                }}>Red</button>
                <button className='btn mx-2' style={{background:'silver',color:'#fff'}}onClick={()=>{
                    setImg('./img/products/silver-car.jpg');
                }}>Silver</button>
                <button className='btn mx-2' style={{background:'black',color:'#fff'}} onClick={()=>{
                    setImg('./img/products/black-car.jpg');
                }}>Black</button>
                <button className='btn mx-2' style={{background:'#eee',color:'#fff'}} onClick={()=>{
                    setImg('./img/products/steel-car.jpg');
                }}>Steel</button>
            </div>
        </div>
    </div>
  )
}
