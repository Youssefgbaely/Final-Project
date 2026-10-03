import bannerImage from "../../assets/images/banners/Bannar Big.jpg"
import bannerImage2 from "../../assets/images/banners/BG.png"
import bannerImage3 from "../../assets/images/banners/gress.png"
import right from "../../assets/icons/right.png"
import { Link } from "react-router"

export default function MainSection() {
    return (
        <div className='container py-2 flex flex-wrap xl:flex-nowrap lg:flex-wrap items-center gap-2 lg:gap-4 lg:py-4'>
            <div className="flex flex-col md:flex-row lg:flex-col items-center gap-2 lg:gap-4">
                <div className="relative w-full h-[350px] md:h-[400px] xl:h-[550px]">
                    <div className="absolute z-5 flex flex-col justify-start items-start lg:gap-5 md:gap-5 gap-3 w-[100%] sm:w-[65%] lg:w-[70%] md:w-[75%] h-auto top-1/2 -translate-y-1/2 px-4 sm:px-6 md:px-8">
                        <h1 className="lg:text-[48px] md:text-[40px] text-[30px] w-3/4 font-semibold text-white">Fresh & Healthy Organic Food</h1>
                        <div className="border-l-2 border-[#84D187] pl-2 ">
                            <div className="flex items-center gap-3">
                                <h4 className="text-white lg:text-[20px] md:text-[20px] text-[16px] font-medium">Sale up to</h4>
                                <span className="text-white lg:text-[20px] md:text-[20px] text-[16px] font-semibold bg-[#FF8A00] py-1 px-3 rounded">30% OFF</span>
                            </div>
                            <p className="text-sm text-white pt-1">Free shipping on all your order.</p>
                        </div>
                        <Link to={"/shop"} className="flex items-center gap-2 bg-white lg:py-3.5 md:py-3.5 py-2.5 lg:px-8 md:px-8 px-6 rounded-3xl">
                            <button className="text-sm text-[#00B207] font-semibold">Shop Now </button>
                            <img src={right} alt="Right-icon" />
                        </Link>
                    </div>
                    <img src={bannerImage} alt="bannerImage" className="w-full h-full object-cover xl:object-left md:object-left rounded-xl" />
                    <div className="absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r 
                   from-[#004D20] via-[#008C3A]/60 to-transparent rounded-xl"></div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-col items-center gap-2 lg:gap-4">
                <div className="relative">
                    <div className="absolute flex flex-col justify-start gap-2 pt-6 pl-6 lg:pt-4 lg:pl-4 lg:gap-1">
                        <p className="text-[14px] font-medium">Summer Sale</p>
                        <h2 className="text-[32px] font-semibold">75% OFF</h2>
                        <p className="text-[14px] text-[#666666] font-normal lg:text-black">Only Fruit & Vegetable</p>
                        <Link to={"/shop"} className="flex items-center gap-2">
                            <div className="text-[#00B207]">Shop Now</div>
                            <img src={right} alt="Right-icon" />
                        </Link>
                    </div>
                    <img src={bannerImage2} alt="bannerImage2" />
                </div>
                <div className="relative">
                    <div className="absolute flex flex-col justify-center items-center gap-2 pt-4 lg:pt-2 md:pt-10 xl:pt-3">
                        <p className="text-white text-[14px] font-medium">Best Deal</p>
                        <h2 className="text-white text-[24px] lg:text-[22px] xl:text-[32px] md:text-[28px] font-semibold w-3/4">Special Products Deal of the Month</h2>
                        <Link to={"/shop"} className="flex items-center gap-2">
                            <div className="text-[#00B207]">Shop Now</div>
                            <img src={right} alt="Right-icon" />
                        </Link>
                    </div>
                    <img src={bannerImage3} alt="bannerImage3" />
                </div>
            </div>
        </div>
    )
}
