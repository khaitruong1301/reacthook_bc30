import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getProductAction, getProductApi } from '../../../../redux/reducers/productReducer';

export default function Home(props) {
    // const [arrProduct,setArrProduct] = useState([]);
    //Sử dụng useSelector lấy dữ liệu từ redux về
    const {arrProduct} = useSelector(state=>state.productReducer);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    //call api
    const getAllProductApi = () =>{
        //Sau khi lấy dữ liệu từ api => setState cho arrProduct
            // setArrProduct(result.data.content);
            /* 
                Dạng 1: action là object
                action = {
                    type:'',
                    payload: ''
                }
                Dạng 2: action là callback function
                action = (dispatch2) => {
                    //call api a 
                    //call api b
                    action = {
                        type: '',
                        payload
                    }
                    dispatch2(action)
                }
            */
        const actionThunk = getProductApi();
        dispatch(actionThunk);
    }



            
    useEffect(()=>{
        getAllProductApi();
    },[]);


    const renderProduct = () => {
        return arrProduct.map((item,index)=>{
            return <div className='col-4 mt-2' key={index}>
                <div className='card'>
                    <img src={item.image} alt={item.name} />
                    <div className='card-body bg-dark text-white'>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <NavLink className='btn btn-secondary' to={`/detail/${item.id}`}>View detail</NavLink>

                        <button className='mx-2 btn btn-success' onClick={()=>{
                            navigate(`/detail/${item.id}`);
                        }}>Detail</button>
                    </div>
                </div>
            </div>
        })
    }
    return (
    <div className='container'>
        <h3 className='text-center'>Shoes app</h3>
        <div className='row'>
            {renderProduct()}
        </div>
    </div>
  )
}
