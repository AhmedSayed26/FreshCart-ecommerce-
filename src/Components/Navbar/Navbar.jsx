import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/freshcart-logo.svg";
import { LogOut, ShoppingCart } from "lucide-react";
import { TokenContext } from "../Context/Token.Context";
export default function Navbar() {
  const { token, LogOOut } = useContext(TokenContext);
  return (
    <>
      <nav className="bg-slate-200 py-5">
        <div className="container flex justify-between items-center">
          <NavLink to={"home"}>
            <img src={logo} alt="logo img" />
          </NavLink>
          {token ? (
            <ul className="flex justify-between items-center gap-3">
              <li>
                <NavLink
                  className="hover:font-semibold hover:transition-all hover:duration-200 hover:cursor-pointer"
                  to={""}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/categories"}
                  className="hover:font-semibold hover:transition-all hover:duration-200 hover:cursor-pointer"
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/products"}
                  className="hover:font-semibold hover:transition-all hover:duration-200 hover:cursor-pointer"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/brands"}
                  className="hover:font-semibold hover:transition-all hover:duration-200 hover:cursor-pointer"
                >
                  Brands
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/orders"}
                  className="hover:font-semibold hover:transition-all hover:duration-200 hover:cursor-pointer"
                >
                  orders
                </NavLink>
              </li>
            </ul>
          ) : null}

          <ul className="flex justify-between items-center gap-3">
            {token ? (
              <li>
                <NavLink to={"/cart"}>
                  <ShoppingCart></ShoppingCart>
                </NavLink>
              </li>
            ) : null}
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i className="fa-brands fa-linkedin"></i>
            </li>
            {token ? (
              <li
                onClick={LogOOut}
                className="hover:font-semibold hover:transition-all hover:duration-200 hover:cursor-pointer"
              >
                <NavLink to={"/login"}>
                  <LogOut />
                </NavLink>
              </li>
            ) : (
              <>
                <li className="hover:font-semibold hover:transition-all hover:duration-200 hover:cursor-pointer">
                  <NavLink to={"/login"}>Login</NavLink>
                </li>
                <li className="hover:font-semibold hover:transition-all hover:duration-200 hover:cursor-pointer">
                  <NavLink to={"register"}>register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
