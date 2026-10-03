import { Link } from "react-router"
import Summer_sale from "../../assets/images/banners/summerSale banner.jpg"


export default function SummerSale() {
    return (
        <div className="container py-10 relative">
            <img src={Summer_sale} alt="SummerSale-Banner" className="w-full h-82 object-cover object-bottom rounded-lg" />

            <div className="xl:w-100 lg:w-90 md:w-70 w-60 flex flex-col items-start xl:gap-3 lg:gap-3 gap-2 absolute top-20 xl:right-30 lg:right-30 md:right-15 right-3">
                <p className="text-white font-medium">Summer Sale</p>
                <h2 className="lg:text-[56px] md:text-[56px] text-[34px] font-semibold text-white"><span className="text-orange-500">37%</span> OFF</h2>
                <p className="text-white">Free on all your order, Free Shipping and 30 days money-back guarantee</p>

                <Link to={"/shop"} className="flex items-center gap-2 lg:py-4 md:py-3 lg:px-8 md:px-7 py-2 px-5 bg-[#00B207] text-white rounded-4xl">
                    <div>Shop Now</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                        <path d="M0 0h16v16H0z" fill="none" />
                        <path fill="currentColor" fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
