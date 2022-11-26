import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const { createUser, googleSignIn, updateUser } = useContext(AuthContext);
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
        userRole: "seller",
      };
    } else {
      userData = {
        userName: name,
        userEmail: email,
        userRole: "buyer",
      };
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(userData);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };

  //Google Sign up
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        const userData = {
          userName: user.displayName,
          userEmail: user.email,
          userRole: "buyer",
        };
        saveUser(userData);
      })
      .catch((e) => console.log(e));
  };

  //
  const saveUser = (user) => {
    console.log(user);
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
            className="btn btn-accent w-full my-3"
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
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-success w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
