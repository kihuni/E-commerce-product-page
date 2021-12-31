import React,{useState} from "react";
import img from "/home/stephen/ecommerce-product-page-main/src/image-avatar.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./Header.css";
import {Link} from 'react-router-dom'
import { SidebarData } from "./Sidebar";
const Header = () => {
const[list, setList] = useState(false)
   const showlist = () => setList(!list)
  return (
    <div className="header">
      <Link to="#" className="menu-bars">
      <div className="burger">
        <MenuIcon  onClick = {showlist}/>
      </div>
      
      </Link>

      <div className="header_optionOne">
        <div className="logo">Sneakers</div>
        <div className={`list ? 'nav-menu active': 'nav-menu' `}>
          <Link className="menu-bars">
          <CloseIcon />
          </Link>
         {SidebarData.map((item, index) =>{
           return(
             <span key ={index} className ={item.cName}>
               <Link to={item.path}>
                 {item.title}
               </Link>
             </span>
           )
         })}
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
