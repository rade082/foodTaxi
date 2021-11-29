import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginActions } from "../redux/login-slice";
import "./navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const isUserLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const logoutHandler = () => {
    dispatch(loginActions.logoutUser());
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm backg">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            FoodTaxi
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                {isUserLoggedIn && (
                  <NavLink className="nav-link" to="/menu">
                    Menu
                  </NavLink>
                )}
              </li>
            </ul>
            <div className="buttons">
              {!isUserLoggedIn && (
                <NavLink to="/login" className="btn btn-outline-dark">
                  <i className="fa fa-user-plus me-1" />
                  Login
                </NavLink>
              )}
              {isUserLoggedIn && (
                <NavLink
                  to="/login"
                  onClick={logoutHandler}
                  className="btn btn-outline-dark ms-2"
                >
                  <i className="fa fa-sign-out me-1" />
                  Logout
                </NavLink>
              )}
              {isUserLoggedIn && (
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart me-1" />
                  Cart({quantity})
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
