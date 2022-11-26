import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSellers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users/sellers");
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/selected/${id}`, {
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
      <h2 className="text-3xl text-red-900 my-3 text-center font-bold">
        All Sellers
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-red-900">Name</th>
              <th className="text-red-900">Email</th>
              <th></th>
              <th className="text-red-900">User Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td className="text-red-900">{user.userName}</td>
                <td className="text-red-900">{user.userEmail}</td>
                <td className="text-red-900">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn text-white btn-xs  btn-error"
                  >
                    DELETE
                  </button>
                </td>
                <td className="text-red-900">{user.userRole}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
