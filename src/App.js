import "./app.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("do you want to delete this post?")) {
      setFeedbackData(feedbackData.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header text="hello" name="robert" />

      <div className="container">
        <FeedbackList feedback={feedbackData} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
