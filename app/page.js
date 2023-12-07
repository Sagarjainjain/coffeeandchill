"use client";
import Header from "@/components/header/header";
import "./globals.css";
import LatestUpdateCard from "@/components/latestupdate/latestupdate";
import Categories from "@/components/categories/categories";
import Navbar from "@/components/navbar/navbar";
import ImageGallery from "@/components/imagegallery/imagegallery";
import BackDrop from "@/utils/backdrop/backdrop";
import { useEffect, useState } from "react";
import Footer from "@/components/footer/footer";
import PopupAd from "@/utils/popad/popupad";

export default function Home() {
  const [isbackdrop, setisBAckDrop] = useState(false);
  const [ispopupad, setisPopupAd] = useState(false);

useEffect(() => {
  // Add logic to trigger the popup (e.g., after a delay)
  const timer = setTimeout(() => {
    setisPopupAd(true);
  }, 3000); // Show popup after 5 seconds

  return () => clearTimeout(timer);
}, []);

  const changename = () => {
    setisBAckDrop((prev) => !prev);
  };
  return (
    <div>
      <Navbar />
      <Header />
      {ispopupad && <PopupAd setisPopupAd={setisPopupAd} />}

      <LatestUpdateCard />
      <Categories setisBAckDrop={changename} />
      {isbackdrop && <BackDrop setisBAckDrop={changename} />}
      <ImageGallery />
      <Footer />
    </div>
  );
}
