import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./../loading/Loading";
import CategCard from "./../CategCard.jsx/CategCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function SwiperCateg() {
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
    <>
      {categ ? (
        <div className="my-8 mt-8">
          <h2 className="text-xl font-semibold mb-3">
            Shop Popular Categories:
          </h2>

          <Swiper
            spaceBetween={2}
            loop={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {categ.map((categ) => (
              <SwiperSlide key={categ._id}>
                <CategCard categInfo={categ} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
