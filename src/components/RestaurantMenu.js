import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CLD_ID } from "../Constants";
import Shimmer from "./Shimmer";
import USeRestaurant from "../Utils/UseRestaurant";
import { useDispatch } from "react-redux";
import { addItems, clearItems } from "../Utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, menu] = USeRestaurant(id);
  const dispatch = useDispatch();
  const handleClearItem = () => {
    dispatch(clearItems());
  };
  const addFoodItem = (item) => {
    dispatch(addItems(item));
  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <div>
          <h1>Restuarnat ID: {restaurant.id}</h1>
          <h2>{restaurant.name}</h2>
          <img src={IMG_CLD_ID + restaurant.cloudinaryImageId} />
          <h3>{restaurant.city}</h3>
          <h3>{restaurant.area}</h3>
          <h3>{restaurant.avgRating}</h3>
          <h3>{restaurant.costForTwoMessage}</h3>
        </div>
        <div>
          <h1>Menu</h1>
          <button onClick={handleClearItem}>Clear Items</button>
          <ul>
            {menu.map((item) => (
              <li key={item.card.info.id}>{item.card.info.name} - {" "}<button onClick={() => addFoodItem(item.card.info)}>Add</button></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
