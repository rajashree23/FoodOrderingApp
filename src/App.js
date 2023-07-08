import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { RestaurantDetail } from "./pages/RestaurantDetail/RestaurantDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/restaurant/:restaurantId" element={<RestaurantDetail />} />
    </Routes>
  );
}

export default App;
