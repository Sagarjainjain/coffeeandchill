import Image from "next/image";
import "./popupad.css";
import cancel from "../../assets/images/close.png";

const PopupAd = ({ setisPopupAd }) => {
  return (
    <div className="popupad_main-container">
      <div className="popupad_container">
        <div className="popupad_header">
          <div className="popupad_cancel" onClick={() => setisPopupAd(false)}>
            <Image src={cancel} height={15} width={15} alt="" />
          </div>
        </div>
        <div className="popupad_content">
          <img
            src="https://res.cloudinary.com/dn0wv4pfj/image/upload/v1701926976/uo1xv55pztivtaeqgvrw.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PopupAd;
