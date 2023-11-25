import { useContext } from "react";
import { IMG_CLD_ID } from "../Constants";
import UserContext from "../Utils/USerContext";
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  const {user} = useContext(UserContext);
    // const {name , cuisines, cloudinaryImageId , avgRating} = restaurant.in fo;
    return (
      <div className="restaurant">
        <img src={IMG_CLD_ID + cloudinaryImageId} alt={name}></img>
        <h2>{name}</h2>
        <h6>{cuisines.join(",")}</h6>
        <h4>{avgRating}</h4>
        <h4>{user.name}</h4>
      </div>
    );
  };
  export default RestaurantCard;