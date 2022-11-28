import React from "react";
import toast from "react-hot-toast";

const MyProductCard = ({ product, refetch }) => {
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
    availability,
  } = product;

  const handleAdvertise = (product) => {
    fetch("https://perterbilt-server.vercel.app/advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Item Advertised");
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`https://perterbilt-server.vercel.app/product/selected/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
          refetch();
        }
      });
  };

  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="h-[200px] rounded" src={image} alt="Shoes" />
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
            <p>Availability: {availability}</p>

            <div className="card-actions flex ">
              <label
                disabled={availability === "sold"}
                onClick={() => handleAdvertise(product)}
                className="btn btn-primary"
                htmlFor="my-modal"
              >
                Advertise
              </label>
              <label
                onClick={() => handleDelete(_id)}
                className="btn btn-error text-white"
                htmlFor="my-modal"
              >
                Delete
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;
