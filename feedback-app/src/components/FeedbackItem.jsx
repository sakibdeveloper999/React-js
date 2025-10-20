import React from "react";

function FeedbackItem({ item, deleteFeedback, startEdit }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-yellow-500">⭐ {item.rating}</p>
        <p className="text-gray-700 mt-1">{item.comment}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => startEdit(item)}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Edit
        </button>
        <button
          onClick={() => deleteFeedback(item.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default FeedbackItem;
