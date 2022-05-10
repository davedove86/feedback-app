import FeedbackItem from "../components/FeedbackItem.jsx"

function FeedbackList({feedback, handleDelete}) {
  if(!feedback || feedback.length === 0) {
    return <div>No feedback yet!</div>
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    ))}
    </div>
  )
}

export default FeedbackList