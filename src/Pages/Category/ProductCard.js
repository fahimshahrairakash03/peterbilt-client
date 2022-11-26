import React from "react";

const ProductCard = ({ product, setProduct }) => {
  const { name, img, location, resalePrice, originalPrice, seller, used } =
    product;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Location: {location} </p>
          <p>Original Price: {originalPrice} </p>
          <p>Resale Price: {resalePrice} </p>
          <p>Seller: {seller} </p>
          <p>Used: {used} </p>
          <div className="card-actions justify-end">
            <label
              onClick={() => setProduct(product)}
              className="btn btn-primary"
              htmlFor="my-modal"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
