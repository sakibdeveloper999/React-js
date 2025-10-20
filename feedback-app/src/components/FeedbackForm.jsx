import React, { useState, useEffect } from "react";

function FeedbackForm({ addFeedback, editItem }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
      setRating(editItem.rating);
      setComment(editItem.comment);
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return alert("Please write something!");
    addFeedback({ name, rating, comment });
    setName("");
    setRating(5);
    setComment("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mb-8"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        {editItem ? "Edit Feedback" : "Add New Feedback"}
      </h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded p-2 mb-3"
      />
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="w-full border rounded p-2 mb-3"
      >
        {[5, 4, 3, 2, 1].map((r) => (
          <option key={r} value={r}>
            {r} Star{r > 1 ? "s" : ""}
          </option>
        ))}
      </select>
      <textarea
        placeholder="Write your feedback..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full border rounded p-2 mb-3"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
      >
        {editItem ? "Update Feedback" : "Submit Feedback"}
      </button>
    </form>
  );
}

export default FeedbackForm;
