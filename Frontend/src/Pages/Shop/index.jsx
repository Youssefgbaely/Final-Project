import { useContext } from "react";
import Bottom_navbar from "../../Components/Bottom_navbar";
import Middle_header from "../../Components/Middle_header";
import SideBar from "../../Components/SideBar";
import Top_header from "../../Components/Top_header";
import { storeContext } from "../../Store";
import Banner from "../../Components/Banner";
import FilterCategories from "../../Components/FilterCategories";
import BannerShop from "../../Components/BannerShop";
import PopularProducts from "../../Components/PopularProducts";
import Newsletter from "../../Components/Newsletter";
import Footer from "../../Components/Footer";
import PopSingleProduct from "../../Components/PopSingleProduct";

export default function Shop() {
  const { className } = useContext(storeContext)

  return (
    <div>
      <Top_header className={className} />
      <Middle_header />
      <hr className="border-gray-300" />
      <Bottom_navbar />
      <div className="absolute left-3 z-50">
        <SideBar />
      </div>
      <Banner childPageWord="Vegetables" pageName="Categories" />
      <BannerShop />
      <FilterCategories />
      <Newsletter />
      <Footer />
    </div>
  )
}
