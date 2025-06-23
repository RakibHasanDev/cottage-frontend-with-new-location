"use client";

import OverlayLoading from "@/components/shared/OverlayLoading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CSVLink } from "react-csv";

const PhoneUsers = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["allChats"],
    queryFn: async () => {
      const res = await axios.get(
        "https://cottage-backend-voilerplate.vercel.app/chats/allChats/all"
      );
      return res.data;
    },
  });

  if (isLoading) return <OverlayLoading />;
  if (isError) return <p>Error fetching data: {error.message}</p>;

  const usersWithPhone = data.filter((user) => user.phone);

  const csvHeaders = [
    { label: "Name", key: "firstName" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Service", key: "service" },
    { label: "Office Name", key: "officeName" },
  ];

  return (
    <div className="p-4 dark:text-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Users with Phone Numbers</h2>
        <CSVLink
          data={usersWithPhone}
          headers={csvHeaders}
          filename="users_with_phone.csv"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download CSV
        </CSVLink>
      </div>
      <table className="w-full text-left shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Service</th>
            <th className="px-4 py-2">Office Name</th>
          </tr>
        </thead>
        <tbody>
          {usersWithPhone.map((user) => (
            <tr key={user._id} className="border-b dark:border-gray-600">
              <td className="px-4 py-2">{user.firstName}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.phone}</td>
              <td className="px-4 py-2">{user.service || "-"}</td>
              <td className="px-4 py-2">{user.officeName || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PhoneUsers;
