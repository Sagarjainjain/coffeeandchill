"use client"
import "./categories.css";
import Category from "../../assets/api/categories.json";
import Image from "next/image";
import ProductCard from "@/utils/productcard/productcard";
import productitem from "../../assets/api/products.json";


const Categories = ({ setisBAckDrop }) => {
  return (
    <div className="container">
      <div className="categories_container">
        <div className="categories_slider">
          {Category.map((item) => (
            <div key={item._id} className="categories_slider-card">
              <div className="categories_card-image">
                <Image
                  src={item.category_image}
                  width={150}
                  height={150}
                  alt={item.category_title}
                />
              </div>
              <div className="categories_card-title">
                <p>{item.category_title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProductCard setisBAckDrop={setisBAckDrop} productitem={productitem} />
    </div>
  );
};

export default Categories;
