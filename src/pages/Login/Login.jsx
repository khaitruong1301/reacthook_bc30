import React from 'react'
import {useFormik} from 'formik';

import * as Yup from 'yup';


export default function Login(props) {
    // console.log(frm.values);
  //Lấy dữ liệu từ form
    const frm = useFormik({
        initialValues: { //Dữ liệu ban đầu mặc định của form
            email: '',
            password: ''
        },
        validationSchema: Yup.object().shape({ //check validation
            email:Yup.string().required('email không được bỏ trống !').email('email không đúng định dạng !'),
            password: Yup.string().required('password không được bỏ trống !').min(6,'pass từ 6 - 32 ký tự!').max(32,'pass từ 6 - 32 ký tự!')
            // .matches(/cybersoft/,'password không đúng định dạng!')
        }), 
        onSubmit: (values) => {
            console.log(values);
        }
    });
  return (
    <form className='container' onSubmit={frm.handleSubmit}>
        <h3>Login</h3>
        <div className='form-group'>
            <p>Email</p>
            <input className='form-control' id="email" name='email' onChange={frm.handleChange} onBlur={frm.handleBlur}/>
            {frm.errors.email ? <span className='text-danger'>{frm.errors.email}</span>: '' }
        </div>
        <div className='form-group'>
            <p>Password</p>
            <input className='form-control' id="password" name='password' onChange={frm.handleChange} onBlur={frm.handleBlur}/>
            {frm.errors.password ? <span className='text-danger'>{frm.errors.password}</span>: '' }

       </div>
        <div className='form-group'>
            <button className='btn btn-success' type="submit">Login</button>
        </div>
    </form>
  )
}
