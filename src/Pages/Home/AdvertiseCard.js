import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const AdvertiseCard = ({ add }) => {
  const { productName, image, price } = add;
  return (
    <div>
      <Swiper
        className="grid grid-cols-3"
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-[180px]" src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{productName}</h2>
              <p>Price: ${price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default AdvertiseCard;
