import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/freshcart-logo.svg";
import { LogOut, ShoppingCart } from "lucide-react";
import { TokenContext } from "../Context/Token.Context";
import { CartContext } from "../Context/Cart.context";
export default function Navbar() {
  const { token, LogOOut } = useContext(TokenContext);
  const { cartInfo } = useContext(CartContext);
  // const { cartInfo, getAllcart } = useContext(CartContext);
  // useEffect(() => {
  //   getAllcart();
  // }, []);
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
                  to={"/wishlist"}
                  className="hover:font-semibold hover:transition-all hover:duration-200 hover:cursor-pointer"
                >
                  WishList
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Brands"}
                  className="hover:font-semibold hover:transition-all hover:duration-200 hover:cursor-pointer"
                >
                  Brands
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/allorders"}
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
                <NavLink className="relative" to={"/cart"}>
                  <ShoppingCart></ShoppingCart>
                  <h5 className="absolute top-[-10px] right-[-10px] rounded-full w-5 h-5 p-2 text-white bg-mainColor flex justify-center items-center">
                    {cartInfo ? cartInfo.numOfCartItems : 0}
                  </h5>
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
