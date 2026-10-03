
import Bottom_navbar from "../../Components/Bottom_navbar";
import Categories from "../../Components/Categories";
import MainSection from "../../Components/MainSection";
import Middle_header from "../../Components/Middle_header";
import PopularProducts from "../../Components/PopularProducts";
import Services from "../../Components/Services";
import SideBar from "../../Components/SideBar";
import Top_header from "../../Components/Top_header";
import ImageSection from "../../Components/ImageSection";
import HotDeals from "../../Components/HotDeals";
import SummerSale from "../../Components/SummerSale";
import FeaturedProducts from "../../Components/FeaturedProducts";
import SubcribeSocial from "../../Components/SubcribeSocial";
import { useContext, useEffect } from "react";
import { storeContext } from "../../Store";



export default function Home() {
    const { showPopup, setShowPopup } = useContext(storeContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 6000)
    }, [])

    return (
        <div className="relative">
            <Top_header />
            <hr className="border-gray-300" />
            <Middle_header />
            <Bottom_navbar className="bg-[#333333] text-white" />
            <div className="absolute left-3 z-50">
                <SideBar />
            </div>
            <MainSection />
            <Services />
            <Categories />
            <PopularProducts />
            <ImageSection />
            <HotDeals />
            <SummerSale />
            <FeaturedProducts />
            {/* overlay الطبقة السودة الى تحت ال popup */}
            {
                showPopup && (<div className="fixed inset-0 bg-black/80 z-10"></div>)
            }
            {/* this is popup component */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-30">
                <SubcribeSocial />
            </div>
        </div>
    )
}
