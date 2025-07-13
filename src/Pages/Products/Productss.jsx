import React from "react";
import axios from "axios";
// import { useEffect, useState } from "react";
import Loading from "../../Components/loading/Loading";
import Card from "../../Components/Card/Card";
import { useQuery } from "@tanstack/react-query";
export default function Productss() {
  // const [products, setProducts] = useState(null);

  async function getProducts() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/products",
      method: "get",
    };
    return await axios.request(options);
  }
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 200000000,
    refetchOnMount: false,
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  // useEffect(() => {
  //   getProducts();
  // }, []);
  return (
    <div>
      {
        <>
          <h2 className="text-xl font-semibold mt-15 d-block">
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
