import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <form action="">
        <h2>How would you rate our service with us?</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
