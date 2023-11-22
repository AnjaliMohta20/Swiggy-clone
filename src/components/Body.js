import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSeachText] = useState("KFC");
  
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.85549849043992&lng=75.77040441334246&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await res.json();
      const restaurants =
        data.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.log("Error", error);
    }
  }

  if (!allRestaurants){
    return null
  } ;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSeachText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <h1>No Result Found.......</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id} >
              <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
