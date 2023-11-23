import Image from "next/image";
import coffeecup from "../../assets/images/coffeecup.png"
import "./header.css"

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_container-title">
        <h1>Welcome To</h1>
        <h1>Coffee and Chill</h1>
      </div>
      <div className="header_container-image">
        <Image src={coffeecup} alt="header_cover_page"/>
        <div className="cup_shape"/>
      </div>
    </div>
  );
}

export default Header