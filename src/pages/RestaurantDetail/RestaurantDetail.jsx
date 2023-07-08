import { useParams, Link } from "react-router-dom";
import { useFoodOrderingContext } from "../../context/FoodOrderingContext";
import "./restaurantdetail.layout.css";
import { AiOutlineArrowLeft, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import { AddReviewModal } from "./AddReviewModal";
export const RestaurantDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const { restaurantId } = useParams();
  const { restaurantData } = useFoodOrderingContext();
  const restaurant = restaurantData.find(
    ({ id }) => id.toString() === restaurantId
  );
  const dishesAvailable = restaurant.menu.map(({ name }) => name);

  return (
    <>
      {restaurant && (
        <div className="detail-container">
          <Link to="/" className="link">
            <AiOutlineArrowLeft className="icon" />
          </Link>
          <div>
            <div className="description">
              <div>
                <h1>{restaurant.name}</h1>
                <p className="dishes">{dishesAvailable.join(", ")}</p>
                <p className="address">{restaurant.address}</p>
                <p className="avg-rating">
                  Average Rating {restaurant.averageRating}
                </p>
              </div>
              <button
                className="primary-button"
                onClick={() => setShowModal((prev) => !prev)}
              >
                Add Review
              </button>
            </div>
            <div className="review-heading">
              <h2>Reviews</h2>
            </div>
            <div className="review-container">
              {restaurant.ratings.map((rating, index) => (
                <div className="rating-container" key={index}>
                  <div className="detailing">
                    <div className="image-name">
                      <div className="image-container">
                        <img src={rating.pp} />
                      </div>
                      <p className="reviewer">{rating.revName}</p>
                    </div>
                    <div className="rating-star">
                      <p>{rating.rating}</p>
                      <AiOutlineStar />
                    </div>
                  </div>
                  <div className="comment">
                    <p>{rating.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <AddReviewModal
          setShowModal={setShowModal}
          restaurantName={restaurant.name}
        />
      )}
    </>
  );
};
