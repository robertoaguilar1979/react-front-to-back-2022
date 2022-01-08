import "./app.css";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
function App() {
  return (
    <div className="app-div">
      <h1>My app</h1>
      <Header text="hello" name="robert" />
      <FeedbackItem />
    </div>
  );
}

export default App;
