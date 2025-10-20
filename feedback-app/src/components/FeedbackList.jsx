import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, deleteFeedback, startEdit }) {
  if (feedback.length === 0)
    return <p className="text-center text-gray-600">No feedback available!</p>;

  return (
    <div className="max-w-3xl mx-auto grid gap-4">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          deleteFeedback={deleteFeedback}
          startEdit={startEdit}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
