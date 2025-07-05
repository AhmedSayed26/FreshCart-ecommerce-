import { TrashIcon } from "lucide-react";
import React, { useContext } from "react";
import { CartContext } from "../Context/Cart.context";

export default function CartItem({ cartInfo }) {
  console.log(cartInfo);
  const { count, price, product, _id } = cartInfo;
  const { imageCover, title, id, category } = product;
  const { RemoveItem, updateCart } = useContext(CartContext);
  return (
    <div className=" flex justify-between items-center my-4 px-5">
      <div className="flex gap-5">
        <img className="w-26" src={imageCover} alt="" />
        <div className="space-y-5">
          <div>
            <h3 className="text-lg font-semibold">product {title}</h3>
            <h3 className="text-md">product {category.name}</h3>
            <h4 className="text-mainColor  font-light">price : {price} EGP</h4>
          </div>
          <button
            onClick={() => {
              RemoveItem(id);
            }}
            className="bg-red-600 text-white rounded-md px-4 py-2 flex items-center gap-1 cursor-pointer"
          >
            <TrashIcon></TrashIcon> Remove
          </button>
        </div>
      </div>
      <div className="space-x-3">
        <button
          onClick={() => {
            updateCart({ productId: id, count: count + 1 });
          }}
          className="bg-mainColor text-white p-2 rounded-md cursor-pointer"
        >
          <i className="fa-solid fa-plus"></i>
        </button>
        <span> {count} </span>
        <button
          onClick={() => {
            updateCart({ productId: id, count: count - 1 });
          }}
          className="bg-mainColor text-white p-2 rounded-md cursor-pointer"
        >
          <i className="fa-solid fa-minus"></i>
        </button>
      </div>
    </div>
  );
}
