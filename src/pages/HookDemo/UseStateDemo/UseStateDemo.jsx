//rfc
import React,{useState} from 'react'
import BaiTapChonXe from './BaiTapChonXe';

export default function UseStateDemo() {
  /*
    useState là hàm của react cung cấp. 
    Lưu ý: Không gọi hàm này trong if else hay switch ...
    [giáTriThayDoi,hamSetLaiGiaTriMoi] = useState(giá trị mặc định ban đầu);
    this.state = {
      like: 1
    }
  */
 
  const [like,setLike] = useState(1);
  return (
    <div className='container'>
      <div className='card w-25'>
        <img src='https://i.pravatar.cc?u=1' alt='avatar' />
        <div className='card-body'>
          <h3>Họ tên: Đỗ Khải</h3>
          <p>Tuổi: 18</p>
          <p>Like: {like}</p>
          <button className='btn btn-danger' onClick={()=> {
            setLike(like+1)
          }}>Like</button>
        </div>
      </div>
      <hr />
      <BaiTapChonXe />
    </div>
  )
}
