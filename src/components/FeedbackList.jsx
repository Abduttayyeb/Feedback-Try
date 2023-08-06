import FeedbackItem from "./FeedbackItem";
import Spinner from "./shared/Spinner";

import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? <Spinner/> : (
    <div>
      {feedback.map((item) => {
        return (
          <FeedbackItem
            key={item.id}
            item={item}
          ></FeedbackItem>
        );
      })}
    </div>)
}
  
export default FeedbackList;
