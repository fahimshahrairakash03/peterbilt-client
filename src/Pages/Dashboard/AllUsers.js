import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://perterbilt-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  //Making Admin
  const handleAdmin = (id) => {
    fetch(`https://perterbilt-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("admin created successfully");
          refetch();
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl text-center text-red-900 my-3 font-bold">
        All Users
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
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleAdmin(user._id)}
                      className="btn text-white btn-xs btn-outline btn-secondary"
                    >
                      Make Admin
                    </button>
                  )}
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

export default AllUsers;
