import React, { useState, useEffect } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem("feedback");
    return saved ? JSON.parse(saved) : [
      { id: 1, name: "Sakib", rating: 5, comment: "Excellent!" },
      { id: 2, name: "Rafi", rating: 4, comment: "Good app!" },
      { id: 3, name: "Mahi", rating: 3, comment: "Can be improved." },
    ];
  });

  const [filterHighRating, setFilterHighRating] = useState(false);
  const [sortByRating, setSortByRating] = useState(false);
  const [editItem, setEditItem] = useState(null);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  // Add feedback
  const addFeedback = (newFeedback) => {
    if (editItem) {
      setFeedback(
        feedback.map((item) =>
          item.id === editItem.id ? { ...newFeedback, id: editItem.id } : item
        )
      );
      setEditItem(null);
    } else {
      newFeedback.id = Date.now();
      setFeedback([newFeedback, ...feedback]);
    }
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Edit feedback
  const startEdit = (item) => {
    setEditItem(item);
  };

  // Filter + Sort
  let displayedFeedback = [...feedback];
  if (filterHighRating) displayedFeedback = displayedFeedback.filter((f) => f.rating >= 4);
  if (sortByRating) displayedFeedback.sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Feedback / Review App
      </h1>

      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={() => setFilterHighRating(!filterHighRating)}
          className={`px-4 py-2 rounded ${
            filterHighRating ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          {filterHighRating ? "Show All" : "Show Only 4★ & 5★"}
        </button>

        <button
          onClick={() => setSortByRating(!sortByRating)}
          className={`px-4 py-2 rounded ${
            sortByRating ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {sortByRating ? "Unsort" : "Sort by Rating"}
        </button>
      </div>

      <FeedbackForm addFeedback={addFeedback} editItem={editItem} />
      <FeedbackList
        feedback={displayedFeedback}
        deleteFeedback={deleteFeedback}
        startEdit={startEdit}
      />
    </div>
  );
}

export default App;
