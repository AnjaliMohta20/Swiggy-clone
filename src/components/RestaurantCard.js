import { IMG_CLD_ID } from "../Constants";
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
    // const {name , cuisines, cloudinaryImageId , avgRating} = restaurant.in fo;
    return (
      <div className="restaurant">
        <img src={IMG_CLD_ID + cloudinaryImageId} alt="Buger King"></img>
        <h2>{name}</h2>
        <h6>{cuisines.join(",")}</h6>
        <h4>{avgRating}</h4>
      </div>
    );
  };
  export default RestaurantCard;