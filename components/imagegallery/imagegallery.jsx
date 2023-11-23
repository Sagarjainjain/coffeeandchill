"use client";
import galleryphotos from "../../assets/api/images.json";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./imagegallery.css";

const ImageGallery = () => {
  return (
    <div className="Image_gallery-container">
      <div className="image_gallery_title">
        <h1>Image Gallery</h1>
        <button>View All</button>
      </div>
      <div className="image_gallery-slider">
        {galleryphotos.map((item) => (
          <div key={item._id} className="image_gallery-item">
            <img src={item.image} alt="image_gallery_data" />
          </div>
        ))}
      </div>
      {/* <div className="image_gallery-controls">
        <FaArrowLeft className="arrow_icon" />
        <FaArrowRight className="arrow_icon" />
      </div> */}
    </div>
  );
};

export default ImageGallery;
