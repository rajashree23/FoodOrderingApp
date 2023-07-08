import { cuisineData, restaurantsData } from "../db";

export const initialData = {
  cuisineData: cuisineData,
  restaurantData: restaurantsData,
  selectedCuisine: null,
};

export const foodOrderingReducer = (state, action) => {
  switch (action.type) {
    case "SET_CUISINE":
      return {
        ...state,
        selectedCuisine: action.payload,
      };
    case "SET_RATING":
      return {
        ...state,
        restaurantData: state.restaurantData.map((r) =>
          r.name === action.payload.restaurantName
            ? {
                ...r,
                ratings: [...r.ratings, action.payload.input],
                averageRating:
                  ((r.ratings.reduce((sum, curr) => curr.rating + sum, 0)) /
                  (r.ratings.length + 1)).toFixed(2),
              }
            : r
        ),
      };
    default:
      return state;
  }
};
