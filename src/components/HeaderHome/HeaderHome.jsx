import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function HeaderHome() {

  const { userLogin } = useSelector(state => state.userReducer)

  const renderLoginNavItem = () => {
    if (userLogin == null) {
      return <NavLink className="nav-link" to="/login">
        Login
      </NavLink>
    }
    return <NavLink className="nav-link" to="/profile">
      Hello !{userLogin.name}
    </NavLink>
  }
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          Project Hook
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              {renderLoginNavItem()}
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login (Authorization - token)
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/antd">
                AntD demo
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hooks
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/usestate">
                  UseState
                </NavLink>
                <NavLink className="dropdown-item" to="/useeffect">
                  useeffect
                </NavLink>
                <NavLink className="dropdown-item" to="/usecallback">
                  usecallback
                </NavLink>
                <NavLink className="dropdown-item" to="/usememo">
                  usememo
                </NavLink>
                <NavLink className="dropdown-item" to="/useref">
                  useref
                </NavLink>
                <NavLink className="dropdown-item" to="/useredux">
                  demo redux (number)
                </NavLink>
                <NavLink className="dropdown-item" to="/reduxfbapp">
                  Facebook app
                </NavLink>
                <NavLink className="dropdown-item" to="/customhook">
                  useRoute(custom hook)
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
