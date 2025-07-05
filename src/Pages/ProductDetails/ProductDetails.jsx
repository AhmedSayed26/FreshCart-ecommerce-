import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/loading/Loading";

export default function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const [productdetail, setproductdetail] = useState(null);
  async function getProductDetails() {
    const option = {
      url: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      method: "GET",
    };
    const { data } = await axios.request(option);
    setproductdetail(data.data);
  }
  useEffect(() => {
    getProductDetails();
  }, [id]);
  return (
    <>
      {productdetail ? (
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <img className="w-ful" src={productdetail.imageCover} alt="" />
          </div>
          <div className="col-span-8 py-5 space-y-5">
            <div>
              <h2 className="text-xl"> {productdetail.title}</h2>
              <h2 className="text-xl font-semibold text-mainColor">
                {productdetail.category.name}
              </h2>
            </div>
            <p>{productdetail.description}</p>
            <div className="flex items-center justify-between">
              <h4>{productdetail.price} EGP</h4>
              <h4>
                {productdetail.ratingAverage}
                <i className="fa-solid fa-star text-yellow-500"></i>
              </h4>
            </div>
            <button className="btn w-full">Add to Cart</button>
          </div>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
}
