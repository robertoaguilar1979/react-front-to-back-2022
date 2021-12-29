import "./app.css";

function App() {
  let title = "hello world title";
  let paragraph = "whats up paragraph";
  let comments = [
    { id: 1, comment: "hello world 1" },
    { id: 2, comment: "hello world 2" },
    { id: 3, comment: "hello world 3" },
  ];
  return (
    <div className="app-div">
      <h1>{title.toLowerCase()}</h1>
      <p>{paragraph}</p>
      <div className="map-elements">
        <h3>comments length ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={comment.id}>
              {comment.comment} the index is {index}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
