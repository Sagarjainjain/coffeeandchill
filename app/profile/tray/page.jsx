"use client";
import itemintray from "../../../assets/api/demotray.json";
import { IoIosArrowDown } from "react-icons/io";
import "./tray.css";
import { useState } from "react";

const Tray = () => {
  const [collapsible, setcollapsible] = useState(false);
  let gst = 3;
  let NetAmount = 0;
  if (itemintray.length > 0) {
    const total = itemintray.reduce((accumulator, item) => {
      const itemPrice = item.quanity * item.product.price;
      NetAmount += itemPrice;
      return accumulator + itemPrice;
    }, 0);
  } else {
    console.log("itemintray is empty");
  }

  let taxcalculate = (NetAmount * gst) / 100;
  let Subtotal = NetAmount + taxcalculate + taxcalculate;

  return (
    <div className="tray_container flex__center">
      <div className="tray_title">
        <h1>Your Tray</h1>
      </div>
      <div className="tray_header-sub_container">
        <div className="tray_header_items">
          {itemintray.map((item) => (
            <div key={item._id} className="tray_header-card">
              <div className="tray_header-image">
                <img src={item.product.product_image} alt="" />
              </div>
              <div className="tray_header-title">
                <h2>{item.product.product_title}</h2>
                <p>{item.product.discription}</p>
                <div className="tray_header-title_footer">
                  <h4>Price: {item.product.price}/-</h4>
                  <div className="traycard_container-qunatity">
                    <button>+</button>
                    <p>{item.quanity}</p>
                    <button>-</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="tray_subtotal_container">
          <div className="tray_subtotal-card">
            <div
              className="tray_subtotal-card_total"
              onClick={() => setcollapsible((prev) => !prev)}
            >
              {collapsible ? (
                <h5>Net Amount: ₹{NetAmount}/-</h5>
              ) : (
                <h5>Subtotal: ₹{Math.ceil(Subtotal)}/-</h5>
              )}
              <IoIosArrowDown size={20} />
            </div>
            {collapsible ? (
              <div className="tray_subtotal-card_taxes">
                <p>CGST: 3%</p>
                <p>SGST: 3%</p>
                <h4>Subtotal: ₹{Math.ceil(Subtotal)}/-</h4>
              </div>
            ) : (
              <div />
            )}
            <div className="tray_subtotal-footer">
              <button>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tray;
