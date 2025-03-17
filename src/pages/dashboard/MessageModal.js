"use client";

import React from "react";

const MessageModal = ({ isOpen, closeModal, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Message Details
        </h2>

        <p className="text-gray-600 whitespace-pre-wrap">
          {message || "No message available."}
        </p>

        <button
          onClick={closeModal}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
