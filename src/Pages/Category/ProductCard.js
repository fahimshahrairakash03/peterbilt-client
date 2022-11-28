import React from "react";
import toast from "react-hot-toast";

const ProductCard = ({ product, setProduct }) => {
  const {
    _id,
    productName,
    price,
    buyingPrice,
    image,
    description,
    category,
    condition,
    purchaseYear,
    location,
    seller,
    email,
    phone,
    date,
    availability,
  } = product;

  const handleReport = (product) => {
    fetch("https://perterbilt-server.vercel.app/product/reported", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.error("Reported the products");
        }
      });
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[200px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-red-900 font-bold">{productName}</h2>
          <p>Resale Price: {price}</p>
          <p>Original Price: {buyingPrice}</p>
          <p>Details: {description}</p>
          <p>Category: {category}</p>
          <p>Condition: {condition}</p>
          <p>Purchase Year: {purchaseYear}</p>
          <p>Seller: {seller}</p>
          <p>Phone: {phone}</p>
          <p>Location: {location}</p>

          <div className="flex items-center">
            {/* {availability === "sold" ? (
              <div className="card-actions ">
                <label
                  
                  onClick={() => setProduct(product)}
                  className="btn btn-accent"
                  htmlFor="my-modal"
                >
                
                </label>
              </div>
            ) : (
              <div className="card-actions ">
                <label
                  onClick={() => setProduct(product)}
                  className="btn btn-primary"
                  htmlFor="my-modal"
                >
                  Book Now
                </label>
              </div>
            )} */}
            {
              <div className="card-actions ">
                <label
                  disabled={availability === "sold"}
                  onClick={() => setProduct(product)}
                  className="btn btn-primary"
                  htmlFor="my-modal"
                >
                  Book Now
                </label>
              </div>
            }
            <p className="text-sm ml-10">Posted On: {date}</p>
          </div>
          <button
            onClick={() => handleReport(product)}
            className="btn w-1/4 btn-sm btn-error"
          >
            Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
