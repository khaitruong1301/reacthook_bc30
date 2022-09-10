import React from 'react'
import { useDispatch } from 'react-redux';
import ModalHoc from '../../HOC/ModalHoc'
import { setComponent } from '../../redux/reducers/drawerReducer';
import Home from '../HookDemo/UseHookRouter/DemoUseParams/Home';
import DemoUseSearchParams from '../HookDemo/UseHookRouter/DemoUseSearchParams/DemoUseSearchParams';
import LoginDemo from '../HookDemo/UseHookRouter/LoginDemo/LoginDemo'
import UseRefDemo from '../HookDemo/UseRefDemo/UseRefDemo';



let WrapModalLoginComponent = new ModalHoc(LoginDemo);

export default function HocDemo() {
    const dispatch = useDispatch();
  return (
    <div className='container'>
        <button className='btn btn-success m-5' data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
            const action = setComponent(UseRefDemo);
            dispatch(action)

        }}>Open login</button>
        <button className='btn btn-success m-5' data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
            //   const action = setComponent(DemoUseSearchParams);
            //   dispatch(action)
        }}>Open home</button>
    </div>
  )
}
