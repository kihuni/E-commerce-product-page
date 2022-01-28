import img from "/home/stephen/ecommerce-product-page-main/src/images/image-product-1.jpg";
import "./MainSection.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <div className="main">
      <img className="img-main" src={img} alt="" />

      <div className="side-items">
        <h6>SNEAKER COMPANY</h6>
        <h2>
          Fall Limited Edition <span>Sneakers</span>
        </h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Feature a durable rubber outer sole, they'll withstand everything the
          weather can offer.
        </p>
        <div className="discount">
          <p className="first-discount">$125.00</p>
          <p className="second-discount">50%</p>
        </div>
        <p>$250.00</p>
        <div className="add-cart">
          <RemoveIcon />
          <span>0</span>
          <AddIcon />
          <button>
            <ShoppingCartOutlinedIcon />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
