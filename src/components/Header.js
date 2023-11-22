import { Link } from "react-router-dom";
import foodVilla from "../assets/img/foodvilla.png"
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
    return (
      <div className="header">
        <Logo />
        <div className="nav-items">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
export default Header;  