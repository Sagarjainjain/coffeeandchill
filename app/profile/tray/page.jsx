import itemintray from "../../../assets/api/demotray.json";
import "./tray.css";

const Tray = () => {
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
            <h5>subtotal</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tray;
