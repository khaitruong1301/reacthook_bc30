import React from "react";
import { useRef } from "react";
import { useState } from "react";
/*
    useState lấy giá trị input => Khi có tính năng chỉnh load lại form trên cùng giao diện
    useRef sử dụng đối với form không bao gồm chỉnh sủa load lại
    useRef : Lưu lại giá trị sau các lần render
*/
//formik & Yup (validation get input form) - antd Form
export default function UseRefDemo(props) {
  const [number, setNumber] = useState(1);

  const userLoginRef = useRef({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    let { id, value } = e.target;
    userLoginRef.current[id] = value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userLoginRef.current);
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>username</p>
        <input className="form-control" id="username" onInput={handleChange} />
      </div>
      <div className="form-group">
        <p>password</p>
        <input
          className="form-control"
          id="password"
          type="password"
          onInput={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
