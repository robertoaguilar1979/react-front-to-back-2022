import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>no list</p>;
  }
  const list = feedback.map((list) => {
    return (
      <FeedbackItem
        key={list.id}
        rating={list.rating}
        text={list.text}
        list={list}
        handleDelete={handleDelete}
      />
    );
  });

  return <div>{list}</div>;
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
export default FeedbackList;
