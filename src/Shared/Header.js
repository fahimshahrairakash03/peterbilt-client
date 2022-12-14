import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const menuItem = (
    <React.Fragment>
      <li>
        <Link className="font-semibold text-red-900 " to="/">
          Home
        </Link>
      </li>

      <li>
        <Link className="font-semibold text-red-900 " to="/blog">
          Blog
        </Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link className="font-semibold text-red-900 " to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="font-bold text-red-900  " to="/dashboard">
              {user.displayName}
            </Link>
          </li>

          <li>
            <Link>
              <button onClick={logOut} className="btn btn-sm btn-primary">
                Signout
              </button>
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link className="font-semibold text-red-900 " to="/login">
            Login
          </Link>
        </li>
      )}
    </React.Fragment>
  );

  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl font-extrabold text-red-700"
          >
            Peterbilt
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItem}</ul>
        </div>
        <label
          htmlFor="dashboard-drawer"
          tabIndex={0}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
