import { IMG_CLD_ID } from "../Constants";

const FoodCard = ({ name, description, imageId, price }) => {
    return (
      <div className="restaurant">
        <img src={IMG_CLD_ID + imageId} alt={name}></img>
        <h2>{name}</h2>
        <h6>{description}</h6>
        <h4>Ruppes{price/100}</h4>
      </div>
    );
  };
  export default FoodCard;