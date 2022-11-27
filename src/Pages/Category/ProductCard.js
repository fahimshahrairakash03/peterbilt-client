import React from "react";

const ProductCard = ({ product, setProduct }) => {
  const {
    productName,
    price,
    image,
    description,
    category,
    condition,
    purchaseYear,
    location,
    seller,
    phone,
  } = product;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[200px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-red-900 font-bold">{productName}</h2>
          <p>Price: {price}</p>
          <p>Details: {description}</p>
          <p>Category: {category}</p>
          <p>Condition: {condition}</p>
          <p>Purchase Year: {purchaseYear}</p>
          <p>Seller: {seller}</p>
          <p>Phone: {phone}</p>
          <p>Location: {location}</p>

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
