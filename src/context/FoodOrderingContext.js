import { createContext, useContext, useReducer } from "react";
import {
  foodOrderingReducer,
  initialData,
} from "../reducer/FoodOrderingReducer";

const FoodOrderingContext = createContext();

export const FoodOrderingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(foodOrderingReducer, initialData);
  return (
    <FoodOrderingContext.Provider
      value={{
        cuisineData: state.cuisineData,
        restaurantData: state.restaurantData,
        selectedCuisine: state.selectedCuisine,
        dispatch: dispatch
      }}
    >
      {children}
    </FoodOrderingContext.Provider>
  );
};

export const useFoodOrderingContext = () => useContext(FoodOrderingContext);
