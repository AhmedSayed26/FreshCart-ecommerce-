import axios from "axios";
import React, { useEffect, useState } from "react";
import SwipperCov from "../../Components/SwipperCover/SwipperCov";
import SwiperCateg from "../../Components/SwiperCateg/SwiperCateg";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/loading/Loading";

export default function Home() {
  const [products, setProducts] = useState(null);
  async function getProducts() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/products",
      method: "get",
    };
    const { data } = await axios.request(options);

    console.log(data);
    setProducts(data.data);
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <SwipperCov></SwipperCov>
      <SwiperCateg></SwiperCateg>
      {products ? (
        <>
          <h2 className="text-xl font-semibold mb-3 d-block">
            Shop Popular Products :
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-col-4 lg:grid-cols-6 gap-4 bg-white mt-8 mb-8">
            {products.map((product) => (
              <Card
                productInfo={product}
                index={product.index}
                key={product.id}
              ></Card>
            ))}
          </div>
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
}
