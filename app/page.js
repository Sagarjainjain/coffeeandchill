import Header from "@/components/header/header";
import "./globals.css";
import LatestUpdateCard from "@/components/latestupdate/latestupdate";
import Categories from "@/components/categories/categories";
import Navbar from "@/components/navbar/navbar";
import ImageGallery from "@/components/imagegallery/imagegallery";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header />
      <LatestUpdateCard />
      <Categories />
      <ImageGallery/>
    </div>
  );
}
