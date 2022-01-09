import "./app.css";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
function App() {
  return (
    <>
      <Header text="hello" name="robert" />

      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
