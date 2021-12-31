import React from "react";
import img from "/home/stephen/ecommerce-product-page-main/src/image-avatar.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="burger">
        <MenuIcon />
      </div>

      <div className="header_optionOne">
        <div className="logo">Sneakers</div>
        <div className="list">
          <span>Collection</span>
          <span>Men</span>
          <span>Women</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="header_optionTwo">
        <ShoppingCartIcon />
        <img className="header_img" src={img} alt="" />
      </div>
    </div>
  );
};

export default Header;
