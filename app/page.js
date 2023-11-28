"use client"
import Header from "@/components/header/header";
import "./globals.css";
import LatestUpdateCard from "@/components/latestupdate/latestupdate";
import Categories from "@/components/categories/categories";
import Navbar from "@/components/navbar/navbar";
import ImageGallery from "@/components/imagegallery/imagegallery";
import BackDrop from "@/utils/backdrop/backdrop";
import { useState } from "react";

export default function Home() {
  const[isbackdrop, setisBAckDrop] = useState(false);

const changename = () => {
    setisBAckDrop((prev) => !prev);
}
  return (
    <div className="container">
      <Navbar/>
      <Header />
      <LatestUpdateCard />
      <Categories setisBAckDrop={changename} />
      {isbackdrop && 
      <BackDrop setisBAckDrop={changename}/>
      }
      <ImageGallery/>

    </div>
  );
}
