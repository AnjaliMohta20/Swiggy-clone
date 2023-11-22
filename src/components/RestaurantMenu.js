import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CLD_ID } from "../Constants";
import Shimmer from "./Shimmer";
import USeRestaurant from "../Utils/USeRestaurant";

const RestaurantMenu = () => {

  const { id } = useParams();
  const {restaurant, menu} = USeRestaurant(id);
  console.log(menu);
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
          <ul>
            {menu.map((item) => (
              <li key={item.card.info.id}>{item.card.info.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
