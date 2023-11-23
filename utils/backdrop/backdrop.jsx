"use client";

import { useState } from "react";
import "./backdrop.css";
import { MdCancel } from "react-icons/md";
import close from "../../assets/images/close.png"
import Image from "next/image";

const BackDrop = () => {
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
          <p>₹ 199/-</p>

          {isaddtotray ? (
            <div className="backdrop-card-qunatity">
              <button>+</button>
              <p>1</p>
              <button>-</button>
            </div>
          ) : (
            <button onClick={() => setisaddtotray(true)}>Add To Tray</button>
          )}
        <div className="backdrop_cancel">
          <div className="backdrop-button_cancel">
            <Image src={close} alt="close" height={15} width={15}/>
       
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BackDrop;
