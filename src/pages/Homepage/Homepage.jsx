import { useFoodOrderingContext } from "../../context/FoodOrderingContext";
import { RestaurantList } from "./component/RestaurantList";

import "./homepage.layout.css";

export const Homepage = () => {
  const { cuisineData, selectedCuisine, dispatch } = useFoodOrderingContext();

  return (
    <div className="homepage">
      <h1 className="title">Food Ordering App</h1>
      <h2 className="cuisine-heading">Select Your Cuisine:</h2>
      <div className="button-container">
        {cuisineData.map((cuisine) => (
          <button
            className="primary-button"
            key={cuisine.id}
            onClick={() =>
              dispatch({ type: "SET_CUISINE", payload: cuisine })
            }
          >
            {cuisine.name}
          </button>
        ))}
      </div>
      {selectedCuisine && <RestaurantList />}
    </div>
  );
};
