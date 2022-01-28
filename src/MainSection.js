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
        <h1>
          Fall Limited Edition <span>Sneakers</span>
        </h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Feature a durable rubber outer sole, they'll withstand everything the
          weather can offer.
        </p>
        <div className="discount">
          <h1 className="first-discount">$125.00</h1>
          <h3 className="second-discount">50%</h3>
        </div>
        <p className="dashed-discount">$250.00</p>
        <div className="add-cart">
          <div className="icons">
            <RemoveIcon className="minus" />
            <span className="num">0</span>
            <AddIcon className="add" />
          </div>

          <button>
            <ShoppingCartOutlinedIcon className="cart-1" />
            <span className="cart-2">Add to cart</span>
          </button>
        </div>
      </div>
      <div className="dormat"></div>
    </div>
  );
};

export default MainSection;
