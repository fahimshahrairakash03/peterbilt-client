import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.name.value;
    const price = form.price.value;
    const image = form.image.value;
    const description = form.description.value;
    const category = form.category.value;
    const categoryId = form.categoryId.value;
    const condition = form.condition.value;
    const purchaseYear = form.year.value;
    const seller = form.seller.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const product = {
      productName,
      price,
      image,
      description,
      category,
      categoryId,
      condition,
      purchaseYear,
      seller,
      phone,
      location,
    };

    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product Added");
          form.reset();
        }
      });
  };

  return (
    <div className="  flex justify-center items-center">
      <div>
        <h2 className="text-3xl text-center text-red-900 my-3 font-bold">
          Add product
        </h2>
        <form onSubmit={handleAddProduct}>
          <div>
            <label className="label">
              <span className="label-text font-semibold text-red-900">
                Product Name
              </span>
            </label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-semibold text-red-900">
                Product Price
              </span>
            </label>
            <input
              name="price"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-semibold text-red-900">
                Product Image Link
              </span>
            </label>
            <input
              name="image"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-semibold text-red-900">
                Product Description
              </span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered"
            ></textarea>
          </div>
          <div>
            <label className="label">
              <span className="label-text font-semibold text-red-900">
                Product Category
              </span>
            </label>
            <input
              name="category"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="flex">
            <div>
              <label className="label">
                <span className="label-text font-semibold text-red-900">
                  Product Category Id
                </span>
              </label>
              <input
                name="categoryId"
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <p className="ml-3 mt-3 font-semibold text-red-800">
              For Heavy Truck - 1 <br />
              For Medium Truck - 2 <br />
              For Pickup - 3
            </p>
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold text-red-900">
                Product Condition
              </span>
            </label>
            <input
              name="condition"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-semibold text-red-900">
                Year of Purchase
              </span>
            </label>
            <input
              name="year"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-semibold text-red-900">
                Seller Name
              </span>
            </label>
            <input
              defaultValue={user?.displayName}
              name="seller"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-semibold text-red-900">
                Seller Phone
              </span>
            </label>
            <input
              name="phone"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-semibold text-red-900">
                Location
              </span>
            </label>
            <input
              name="location"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <input
            type="submit"
            value="Submit"
            className="w-1/2 mx-auto my-3 btn btn-primary"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
