import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const BookingModal = ({ product }) => {
  const { user } = useContext(AuthContext);
  const { productName, price, _id } = product;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;
    // console.log(name, email, price, phone, location);
    const booking = {
      productName,
      buyer: name,
      email: email,
      price,
      phone,
      location,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          productStatus(_id);
          toast.success("Booking confirmed");
        }
        console.log(data);
      });
  };

  const productStatus = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{productName}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
            <p>Name</p>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input w-full input-bordered "
            />
            <p>Email</p>
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              readOnly
              placeholder="Email Address"
              className="input w-full input-bordered "
            />
            <p>Price</p>
            <input
              name="price"
              type="text"
              defaultValue={price}
              className="input w-full input-bordered "
            />
            <p>Phone Number</p>
            <input
              name="phone"
              type="text"
              className="input w-full input-bordered "
            />
            <p>Meeting Location</p>
            <input
              name="location"
              type="text"
              className="input w-full input-bordered "
            />
            <br />
            <input type="submit" value="Submit" className="btn btn-accent" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
