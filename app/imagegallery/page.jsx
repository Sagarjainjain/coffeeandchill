import "./imagegallery.css";

const ImageGallery = () => {
  const portrait =
    "https://res.cloudinary.com/dn0wv4pfj/image/upload/v1700818801/brhnd3yc5avuyp0myz3r.jpg";
  const square1 =
    "https://res.cloudinary.com/dn0wv4pfj/image/upload/v1700818802/jny6anczhhwws1m5c95t.jpg";
  const square2 =
    "https://res.cloudinary.com/dn0wv4pfj/image/upload/v1700818801/fszdhf1rqfusofqmfo2b.jpg";
  const landscape =
    "https://res.cloudinary.com/dn0wv4pfj/image/upload/v1700818801/vw7pagovtgt4d3skedes.jpg";
  return (
    <div className="imagegallery_container">
      <div className="imagegallery-title">
        <h1>Image Gallery</h1>
      </div>
      <div className="imagegallery_main_container">
        <div className="imagegallery_images">
          <div className="imagegallery_images-first_row">
            {/* portrait */}
            <div className="imagegallery_images-portrait">
              <img src={portrait} alt="portrait_data" />
            </div>
            {/* squares */}
            <div className="imagegallery_images-second_row">
              <div className="imagegallery_images_squares">
                <div className="imagegallery_images-square-1">
                  <img src={square1} alt="square_data" />
                </div>
                <div className="imagegallery_images-square-2">
                  <img src={square2} alt="square_data" />
                </div>
              </div>
              {/* landscape */}
              <div className="imagesgallery_images-landscape">
                <img src={landscape} alt="lands_data" />
              </div>
            </div>
          </div>
          <div className="imagesgallery_images-landscap_mobile">
            <img src={landscape} alt="lands_data" />
          </div>
        </div>
        <div className="imagegallery_images">
          <div className="imagegallery_images-first_row">
            {/* portrait */}
            <div className="imagegallery_images-portrait">
              <img src={portrait} alt="portrait_data" />
            </div>
            {/* squares */}
            <div className="imagegallery_images-second_row">
              <div className="imagegallery_images_squares">
                <div className="imagegallery_images-square-1">
                  <img src={square1} alt="square_data" />
                </div>
                <div className="imagegallery_images-square-2">
                  <img src={square2} alt="square_data" />
                </div>
              </div>
              {/* landscape */}
              <div className="imagesgallery_images-landscape">
                <img src={landscape} alt="lands_data" />
              </div>
            </div>
          </div>
          <div className="imagesgallery_images-landscap_mobile">
            <img src={landscape} alt="lands_data" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
