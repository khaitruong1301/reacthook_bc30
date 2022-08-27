import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginDemo(props) {
    const navigate = useNavigate();
    // console.log(props)
    const userLoginRef = useRef({
        userName: '',
        passWord: ''
    });
    const handleChange = (e) => {
        const { value, id } = e.target;
        userLoginRef.current[id] = value;
        console.log(userLoginRef.current);
    }
    const handleSubmit = (e) => {
        e.preventDefault(); //Chặn reload browser
        console.log(userLoginRef.current);
        let promise = new Promise((resolve, errorFunction) => {
            setTimeout(() => {
                console.log('Đăng nhập api')
                if (userLoginRef.current.userName == 'doquangkhai') {
                    resolve('Đăng nhập thành công');
                }
                else {
                    errorFunction('Đăng nhập thất bại');
                }
            }, 3000);
        })

        promise.then(result => {
            console.log(result);
            //Nếu thành công chuyển hướng về home
            navigate('/');
        })
        promise.catch(err =>{
            console.log(err);
            navigate('/reduxfbapp')
        });

        // console.log('abc')

    }
    return (
        <form className='container' onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className='form-group'>
                <p>username</p>
                <input className='form-control' id="userName" onChange={handleChange} />
            </div>
            <div className='form-group'>
                <p>password</p>
                <input className='form-control' id="passWord" onChange={handleChange} />
            </div>
            <div className='form-group'>
                <button className='btn btn-success'>Login</button>
            </div>
        </form>
    )
}




// let promise = new Promise((thanhCong,thatBai)=> {
//     //Xử lý gì đó if else ...
//     thanhCong('kết quả thành công');

//     //if else 
//     thatBai('lỗi ....')
// })


// promise.then()
// promise.catch()