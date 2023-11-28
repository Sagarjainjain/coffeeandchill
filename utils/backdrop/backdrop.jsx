"use client";

import { useState } from "react";
import "./backdrop.css";
import close from "../../assets/images/close.png";
import Image from "next/image";

const BackDrop = ({setisBAckDrop}) => {
  const [isaddtotray, setisaddtotray] = useState(false);
  return (
    <div className="backdrop_container">
      <div className="backdrop-card">
        <div className="backdrop-card-image">
          <img
            src="https://res.cloudinary.com/dn0wv4pfj/image/upload/v1700376241/c00vxc4vvirklb4j9j4q.png"
            alt="daat"
          />
        </div>
        <div className="backdrop-card-title">
          <h1>Cappuccino</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
            augue vel erat sodales sodales dignissim eget augue. Aenean cursus,
            massa sed pellentesque consectetur, nunc elit vehicula magna,
          </p>
          <div className="backdrop-card_footer">
            <h4>₹ 199/-</h4>

            {isaddtotray ? (
              <div className="backdrop-card-qunatity">
                <button>+</button>
                <p>1</p>
                <button>-</button>
              </div>
            ) : (
              <button onClick={() => setisaddtotray(true)}>Add To Tray</button>
            )}
          </div>
          <div className="backdrop_cancel">
            <div className="backdrop-button_cancel" onClick={setisBAckDrop}>
              <Image src={close} alt="close" height={15} width={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackDrop;
