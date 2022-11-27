import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hook/useAdmin";
import useSeller from "../hook/useSeller";
import Header from "../Shared/Header";

const DashboardLayOut = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link className="text-red-900 font-bold" to="/dashboard">
                My Orders
              </Link>
            </li>
            {isSeller && (
              <>
                <li>
                  <Link
                    className="text-red-900 font-bold"
                    to="/dashboard/myproducts"
                  >
                    My Products
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-red-900 font-bold"
                    to="/dashboard/addproduct"
                  >
                    Add Product
                  </Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li className="text-red-900 font-bold">
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>
                <li className="text-red-900 font-bold">
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
                <li className="text-red-900 font-bold">
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayOut;
