import axios from "axios";
// import React, { useEffect, useState } from "react";
import SwipperCov from "../../Components/SwipperCover/SwipperCov";
import SwiperCateg from "../../Components/SwiperCateg/SwiperCateg";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/loading/Loading";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  // const [products, setProducts] = useState(null);
  async function getProducts() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/products",
      method: "get",
    };
    return await axios.request(options);
  }
  // useEffect(() => {
  //   getProducts();
  // }, []);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 200000000,
    refetchOnMount: false,
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <h2>this page does't work</h2>;
  }
  return (
    <div>
      <SwipperCov></SwipperCov>
      <SwiperCateg></SwiperCateg>
      {
        <>
          <h2 className="text-xl font-semibold mb-3 d-block">
            Shop Popular Products :
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-col-4 lg:grid-cols-6 gap-4 bg-white mt-8 mb-8">
            {data.data.data.map((product) => (
              <Card
                productInfo={product}
                index={product.index}
                key={product.id}
              ></Card>
            ))}
          </div>
        </>
      }
    </div>
  );
}
