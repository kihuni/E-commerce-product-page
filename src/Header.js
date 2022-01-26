import React, { useState } from "react";
import img from "/home/stephen/ecommerce-product-page-main/src/image-avatar.png";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { SidebarData } from "./Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";
const Header = ({showCart}) => {
  const [list, setList] = useState(false);
  const showlist = () => setList(!list);
  return (
    <nav className="navbarItems">
      <h1 className="navbar-logo">Sneakers</h1>
      <div className="menu-icon" onClick={showlist}>
        {list ? <CloseIcon /> : <MenuIcon />}
      </div>
      <ul className={list ? "nav-menu active" : "nav-menu"}>
        {SidebarData.map((items, index) => {
          return (
            <li key={index}>
              <Link to={items.path} className="items.cName">
                {items.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="navbar-optionThree">
      <Badge badgeContent={4} color="success">
    <ShoppingCartOutlinedIcon className="shopping-icon" onClick ={showCart}/>
    </Badge>
        <img className="header_img" src={img} alt="" />
      </div>
    </nav>
  );
};

export default Header;
