import "./app.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app-div">
      <h1>My app</h1>
      <Header text="hello" name="robert" />
    </div>
  );
}

export default App;
