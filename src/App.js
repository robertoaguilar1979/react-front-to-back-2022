import "./app.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);
  return (
    <>
      <Header text="hello" name="robert" />

      <div className="container">
        <FeedbackList feedback={feedbackData} />
      </div>
    </>
  );
}

export default App;
