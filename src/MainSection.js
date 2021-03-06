import img from "/home/stephen/ecommerce-product-page-main/src/images/image-product-1.jpg";
import "./MainSection.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import useState from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import img1 from "/home/stephen/ecommerce-product-page-main/src/images/image-product-1-thumbnail.jpg";
import img2 from "/home/stephen/ecommerce-product-page-main/src/images/image-product-2-thumbnail.jpg";
import img3 from "/home/stephen/ecommerce-product-page-main/src/images/image-product-3-thumbnail.jpg";
import img4 from "/home/stephen/ecommerce-product-page-main/src/images/image-product-4-thumbnail.jpg";
const MainSection = () => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className="main">
      <div className="images">
        <img className="img-main" src={img} alt="" />
        <div className="img-small">
          <img className="img1" src={img1} alt="" />
          <img className="img2" src={img2} alt="" />
          <img className="img3" src={img3} alt="" />
          <img className="img4" src={img4} alt="" />
        </div>
      </div>
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
          <p className="dashed-discount">$250.00</p>
        </div>

        <div className="add-cart">
          <ButtonGroup className="icons">
            <Button
              onClick={() => {
                setItemCount(Math.max(itemCount - 1, 0));
              }}
            >
              {" "}
              <RemoveIcon className="minus" />
            </Button>

            <span className="num" badgeContent={itemCount}>
              0
            </span>

            <Button
              onClick={() => {
                setItemCount(Math.max(itemCount + 1));
              }}
            >
              {" "}
              <AddIcon className="add" />
            </Button>
          </ButtonGroup>

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
