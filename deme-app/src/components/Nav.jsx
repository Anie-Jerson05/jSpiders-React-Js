import "./apple.css";
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useState } from "react";

const Nav = () => {

  const [cart,setCart] = useState(3);

  return (
    <>
      <nav>
          <ul>
            <li><AppleIcon /></li>
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>AirPods</li>
            <li>TV & Home</li>
            <li>Entertainment</li>
            <li>Accessories</li>
            <li>Support</li>
            <li><SearchIcon /></li>
            <li><ShoppingBagOutlinedIcon/></li>
            <li className="cart">{cart}</li>
          </ul>
      </nav>
    </>
  );
};

export default Nav;
