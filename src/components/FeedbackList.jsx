import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>no list</p>;
  }
  const list = feedback.map((list) => {
    return <FeedbackItem key={list.id} rating={list.rating} text={list.text} />;
  });

  return <div>{list}</div>;
}

export default FeedbackList;
