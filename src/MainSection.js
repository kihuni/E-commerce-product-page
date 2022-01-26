import img from '/home/stephen/ecommerce-product-page-main/src/images/image-product-1.jpg'
import './MainSection.css'

const MainSection = () => {
  return (
  <div className='main'>
      <img className='img-main' src={img} alt="" />
      <div className='side-items'>
          <h6>SNEAKER COMPANY</h6>
          <h2>Fall Limited Edition <span>Sneakers</span></h2>
          <p>These low-profile sneakers are your perfect casual wear companion. Feature a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
      </div>
  </div>
  
  );
};

export default MainSection;
