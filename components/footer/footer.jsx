import "./footer.css";
import { FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_container-title">
        <h1>COFFEE AND CHILL</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          molestias?
        </p>
        <div className="footer_container-social">
          <FaInstagram className="social_icon" size={30} />
          <FaFacebook className="social_icon" size={30} />
          <FaXTwitter className="social_icon" size={30} />
        </div>
      </div>
      <div className="footer_container-second_half">
        <div className="footer_container-working">
          <h2>Working Hours:</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="footer_container-contact">
          <h2>Contact Us:</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <h4>2024 COFFEE AND CHILL. All Rights Reserved.</h4>
    </div>
  );
};

export default Footer;
