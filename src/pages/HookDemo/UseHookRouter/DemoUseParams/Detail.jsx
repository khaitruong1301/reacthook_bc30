import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom'


export default function Detail() {
    const [productDetail, setProductDetail] = useState({});
    const params = useParams();

    console.log('productDetail', productDetail);

    const getProductDetailApi = async () => {
        let { id } = params;
        try {
            let result = await axios({
                url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
                method: 'GET'
            });
            setProductDetail(result.data.content);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        //callapi
        getProductDetailApi();
    }, []);

    return (
        <div className='container'>
            <h3>Params: Product - {params.id}</h3>
            <div className='row'>
                <div className="col-4">
                    <img className='w-100' src={productDetail.image} alt={productDetail.name} />
                </div>
                <div className='col-8'>
                    <h1>{productDetail.name}</h1>
                </div>
            </div>
            <h3>Related Product</h3>
            <div className='row mt-2'>
                {/*toán tử ?: optional chaining */}
                {productDetail.relatedProducts?.map((item, index) => {
                    return <div className='col-4' key={index}>
                        <div className='card'>
                            <img src={item.image} alt={item.name} />
                            <div className='card-body bg-dark text-white'>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <NavLink className='btn btn-secondary' to={`/detail/${item.id}`}>View detail</NavLink>  
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
