import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Components/loading/Loading";
import Card from "../../Components/Card/Card";
export default function Productss() {
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
      {products ? (
        <>
          <h2 className="text-xl font-semibold my-5 d-block">
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
