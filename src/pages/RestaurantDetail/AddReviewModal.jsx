import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useFoodOrderingContext } from "../../context/FoodOrderingContext";

export const AddReviewModal = ({ setShowModal, restaurantName }) => {
  const { dispatch } = useFoodOrderingContext();
  const [input, setInput] = useState({
    pp: "https://picsum.photos/200",
    revName: "Rajashree",
    rating: "",
    comment: "",
  });
  return (
    <div className="modal-container">
      <div className="main-heading">
        <MdOutlineCancel onClick={() => setShowModal(false)} className="icon" />
        <h1 className="heading">Add Your Review</h1>
      </div>
      <div className="input-fields">
        <label htmlFor="rating">Rating:</label>
        <select
          onChange={(e) =>
            setInput((prev) => ({ ...prev, rating: e.target.value }))
          }
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="input-fields">
        <label htmlFor="comment">Comment: </label>
        <input
          value={input.comment}
          type="text"
          id="comment"
          onChange={(e) =>
            setInput((prev) => ({ ...prev, comment: e.target.value }))
          }
        />
      </div>
      <button
        onClick={() => {
          dispatch({ type: "SET_RATING", payload: { input, restaurantName } });
          setShowModal(false);
        }}
      >
        Submit
      </button>
    </div>
  );
};
