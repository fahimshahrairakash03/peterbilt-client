import { useQuery } from "@tanstack/react-query";
import React from "react";

const ReportedItems = () => {
  const url = "http://localhost:5000/product/reported";
  const { data: reports = [] } = useQuery({
    queryKey: ["reported"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl text-center text-red-900 my-3 font-bold">
        Reported Items
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Seller</th>
              <th>Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {reports?.map((report, i) => (
              <tr key={report._id}>
                <th>{i + 1}</th>
                <td>{report.productName}</td>
                <td>{report.price}</td>
                <td>{report.seller}</td>
                <td>${report.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedItems;
