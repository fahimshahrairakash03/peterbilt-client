import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import AdvertiseCard from "./AdvertiseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Advertise = () => {
  const { advertise } = useContext(AuthContext);
  console.log(advertise);
  return (
    <div className="my-10 px-5">
      <h1 className="text-5xl font-bold text-center my-7 text-red-900">
        Explore the Products !
      </h1>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {advertise.map((add) => (
            <SwiperSlide key={add._id}>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img className="h-[180px]" src={add.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{add.productName}</h2>
                  <p>Price: ${add.price}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </div>
    </div>
  );
};

export default Advertise;
