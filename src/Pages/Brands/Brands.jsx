import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../Components/loading/Loading";

export default function Brands() {
  const [brands, setbrands] = useState(null);
  async function getAllbrands() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/brands",
      method: "GET",
    };
    const { data } = await axios.request(options);
    setbrands(data.data);
    console.log(data.data);
  }
  useEffect(() => {
    getAllbrands();
  }, []);
  return (
    <>
      <h2 className="mt-10 text-4xl font-semibold text-mainColor flex justify-center items-center">
        All Brands
      </h2>
      {brands == null ? (
        <Loading></Loading>
      ) : (
        <>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-col-4 lg:grid-cols-4 gap-6 my-10 ">
            {brands.map((brand) => (
              <div>
                <div key={brand._id} className="">
                  <div className="border border-gray-500/20 rounded-md hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-mainColor">
                    <div>
                      <img src={brand.image} alt="" />
                    </div>
                    <div className="flex justify-center items-center my-4">
                      <h2>{brand.name}</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
