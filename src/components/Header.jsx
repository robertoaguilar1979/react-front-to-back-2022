import header from "./header.css";
import FeedbackItem from "./FeedbackItem";
function Header({ text, name }) {
  return (
    <header>
      <div className="container">
        <h2>Feedback UI</h2>
        <h3>
          {text} {name}
        </h3>
      </div>
    </header>
  );
}

export default Header;
