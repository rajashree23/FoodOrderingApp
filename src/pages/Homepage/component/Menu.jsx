import { Link } from "react-router-dom";

export const Menu = ({ menu , restaurantName,restaurantId}) => {

  return (
    <Link className="menu-container link" to={`restaurant/${restaurantId}`}>
      <div className="img">
        <img src={menu.imgSrc} alt={menu.name[0]} />
      </div>
      <div className="descr">
        <p className="dish-name">{menu.name}</p>
        <p className="price">
          Rs {menu.price} for {menu.qty}
        </p>
        <p className="restaurant">{restaurantName}</p>
      </div>
    </Link>
  );
};
