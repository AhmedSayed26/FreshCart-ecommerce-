import React from "react";
import { useContext, useEffect } from "react";
import { CartContext } from "../../Components/Context/Cart.context";
import { wishlisttContext } from "../../Components/Context/WishList.context";
import Loading from "../../Components/loading/Loading";
import { TrashIcon } from "lucide-react";

export default function WishList() {
  //   const { addTocart } = useContext(CartContext);
  const { addTocart } = useContext(CartContext);
  const { wishlistInfo, GetAllWishList, RemoveFromWishList } =
    useContext(wishlisttContext);
  useEffect(() => {
    GetAllWishList();
  }, []);

  return (
    <div className="my-10 bg-slate-200">
      <h2 className="text-2xl font-semibold p-4">My wish List </h2>
      {wishlistInfo == null ? (
        <Loading></Loading>
      ) : (
        wishlistInfo?.map((product) => (
          <>
            <div
              key={product.id}
              className="flex justify-between items-center p-4"
            >
              <div className="flex items-center gap-5">
                <div>
                  <img className="w-[200px]" src={product.imageCover} alt="" />
                </div>
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {product.title.split(" ").slice(0, 3).join(" ")}
                    </h3>
                    <h3 className="text-md">{product.category.name}</h3>
                  </div>
                  <h4 className="text-mainColor  font-light">
                    {product.price} EGP
                  </h4>
                  <button
                    onClick={() => {
                      RemoveFromWishList(product.id);
                    }}
                    className="btn bg-red-600 flex gap-2 p-2 "
                  >
                    <TrashIcon></TrashIcon>
                    <p>Remove</p>
                  </button>
                </div>
              </div>
              <div>
                <button
                  onClick={() => addTocart(product.id)}
                  className="btn p-2"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </>
        ))
      )}
    </div>
  );
}
