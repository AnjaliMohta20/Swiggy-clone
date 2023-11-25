import { Link } from "react-router-dom";
import foodVilla from "../assets/img/foodvilla.png"
import { useSelector } from "react-redux";
import store from "../Utils/Store";
const Logo = () => {
    return (
      <img
        className="logo"
        alt="logo"
        src={foodVilla}
      />
    );
  };

  const Header = () => {
    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems);

    return (
      <div className="header">
        <Logo />
        <div className="nav-items">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to= '/cart'>Cart- {cartItems.length}</Link></li>
            <li><Link to='/instamart'>Instamart</Link></li>
          </ul>
        </div>
      </div>
    );
  };
export default Header;  