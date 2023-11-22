import React from 'react'
import { useEffect, useState } from "react";

const USeRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.76883084396519&lng=75.8492935448885&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    const restaurantInfo = json.data?.cards[0]?.card?.card.info;
    const menuItems =
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;
    console.log(restaurantInfo,menuItems);
    setRestaurant(restaurantInfo);
    setMenu(menuItems);
  }
  return [restaurant, menu]
}

export default USeRestaurant;