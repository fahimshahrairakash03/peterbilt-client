import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const seller = form.seller.checked;
    let userData = {};
    if (seller === true) {
      userData = {
        userName: name,
        userEmail: email,
        userPassword: password,
        userRole: "seller",
      };
    } else {
      userData = {
        userName: name,
        userEmail: email,
        userPassword: password,
      };
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.log(e));

    console.log(userData);
  };

  return (
    <div className="h-[600px] flex justify-center items-center">
      <div>
        <h2 className="text-3xl font-bold text-center">Signup</h2>
        <form onSubmit={handleSignup}>
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="flex items-center">
            <input
              defaultChecked
              type="checkbox"
              className=" checkbox-primary"
              name="buyer"
              id=""
            />
            <p>Buyer</p>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className=" checkbox-primary"
              name="seller"
              id=""
            />
            <p>Seller</p>
          </div>

          <input
            className="btn btn-accent w-full m-3"
            value="Signup"
            type="submit"
          />
          <p>
            Already have an account?
            <Link className="text-blue-600" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
