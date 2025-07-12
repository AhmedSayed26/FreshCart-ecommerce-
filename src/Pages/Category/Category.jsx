import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Components/loading/Loading";
// import CategCard from "./../CategCard.jsx/CategCard";
import CategCard from "./../../Components/CategCard.jsx/CategCard";

export default function Category() {
  const [categ, setCateg] = useState(null);
  async function getCateImage() {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/categories",
        method: "GET",
      };
      const { data } = await axios.request(options);
      console.log(data.data);
      setCateg(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCateImage();
  }, []);
  return (
    <div>
      {categ ? (
        <div className="my-8 mt-8">
          <h2 className="text-xl font-semibold mb-3">
            Shop Popular Categories:
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-col-4 lg:grid-cols-4 gap-6">
            {categ.map((categ) => (
              <div key={categ._id}>
                <CategCard categInfo={categ} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
