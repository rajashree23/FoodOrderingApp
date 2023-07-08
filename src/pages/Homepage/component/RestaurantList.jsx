import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useFoodOrderingContext } from "../../../context/FoodOrderingContext";
import { Menu } from "./Menu";

export const RestaurantList = () => {
  const { restaurantData, cuisineData, selectedCuisine } =
    useFoodOrderingContext();

  const restaurantBySelectedCuisine = restaurantData.filter(
    ({ cuisine_id }) => cuisine_id === selectedCuisine.id
  );

  return (
    <div className="restaurant-container">
      {restaurantBySelectedCuisine.map((restaurant) => (
        <div key={restaurant.id} className="restaurant">
          <div className="restaurant-heading">
            <h2>Dishes by {restaurant.name}</h2>
            <Link to={`restaurant/${restaurant.id}`} className="link">
              <AiOutlineArrowRight className="icon" />
            </Link>
          </div>
          <div className="menu-list">
            {restaurant.menu.map((m) => (
              <Menu key={m.id} menu={m} restaurantName={restaurant.name} restaurantId={restaurant.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
