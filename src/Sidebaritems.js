import React,  { useState }  from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"
import { Link } from "react-router-dom";
import { SidebarData } from "./Sidebar";
import './Sidebaritems.css'

const Sidebaritems = () => {
    const [list, setList] = useState(false);
    const showlist = () => setList(!list);
    return (
        <div>
        <Link to="#" className="menu-bars">
        <div>
          <MenuIcon onClick={showlist} />
        </div>
      </Link>
       <div className={list ? "nav-menu.active" : "nav-menu"}>
          <Link className="menu-bars">
            <CloseIcon onClick={showlist} />
          </Link>
          {SidebarData.map((item, index) => {
            return (
              <span key={index} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </span>
            );
          })}
        </div> 
        </div>
    )
}

export default Sidebaritems
