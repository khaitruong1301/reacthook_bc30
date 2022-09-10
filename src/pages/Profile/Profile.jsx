import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { getProfileApi } from '../../redux/reducers/userReducer';
import { ACCESS_TOKEN, getStore } from '../../util/tools';

export default function Profile() {
    const { userLogin } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        //Khi trang vừa load lên thì gọi api => (dispatch lại getProfile api đã xây dựng)
        dispatch(getProfileApi());
    }, [])
    
    // if (!getStore(ACCESS_TOKEN)) {
    //     //Nếu chưa đăng nhập => Chuyển hướng trang
    //     alert('Đăng nhập để vào trang này !');
    //     return <Navigate to='/login' />
    // }

    return (
        <div className='container-fluid'>

            <div className="d-flex align-items-start">

                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <div>
                        <img src={userLogin?.avatar} className="w-100" alt="..." />
                    </div>
                    <button className="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true">Profile</button>
                    <button className="nav-link" id="v-pills-history-tab" data-bs-toggle="pill" data-bs-target="#v-pills-history" type="button" role="tab" aria-controls="v-pills-history" aria-selected="false">Orderhistory</button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        Profile
                    </div>

                    <div className="tab-pane fade" id="v-pills-history" role="tabpanel" aria-labelledby="v-pills-history-tab">
                        {userLogin?.ordersHistory?.map((orderItem, index) => {
                            return <div className='mt-2' key={index}>
                                <hr />
                                <h3>Order detail</h3>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>name</th>
                                            <th>quantity</th>
                                            <th>img</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderItem.orderDetail?.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>1</td>
                                                <td>
                                                    <img src={item.image} width={50} height={50} style={{ objectFit: 'cover' }} alt='...' />
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}
