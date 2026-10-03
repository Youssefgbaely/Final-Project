import vegtables from "../../assets/images/banners/Rectangle vegtables.png"
import meet from "../../assets/images/banners/Rectangle meet.png"
import fruits from "../../assets/images/banners/Rectangle fruites.png"
import right from "../../assets/icons/right.png"
import { Link } from "react-router"

export default function ImageSection() {
    return (
        <div className='container grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-6 my-12'>
            <div className="relative flex flex-col items-center">
                <img src={vegtables} alt="vegtables" />
                <div className="flex flex-col items-center gap-2 absolute top-8">
                    <p className="text-sm font-medium text-[white]">Best Deals</p>
                    <h3 className="lg:text-[40px] md:text-[32px] text-[24px] font-semibold text-[white]">Sale of the Month</h3>
                    <div className="flex items-center gap-5">
                        <div>
                            <div className="text-white">
                                <p className="text-[32px] font-semibold leading-none">
                                    00 :
                                </p>
                                <span className="text-sm ">
                                    Days
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="text-white">
                                <p className="text-[32px] font-semibold leading-none">
                                    02 :
                                </p>
                                <span className="text-sm ">
                                    Hours
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="text-white">
                                <p className="text-[32px] font-semibold leading-none">
                                    18 :
                                </p>
                                <span className="text-sm">
                                    Mins
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="text-white">
                                <p className="text-[32px] font-semibold leading-none">
                                    46
                                </p>
                                <span className="text-sm">
                                    Secs
                                </span>
                            </div>
                        </div>
                    </div>
                    <Link to={"/shop"} className="flex items-center gap-2 bg-white py-3.5 px-8 rounded-3xl">
                        <button className="text-sm text-[#00B207] font-semibold">Shop Now </button>
                        <img src={right} alt="Right-icon" />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center relative">
                <img src={meet} alt="Meet image" />
                <div className="flex flex-col items-center gap-2 absolute top-8 text-white">
                    <p className="text-sm font-medium">85% Fat Free</p>
                    <h3 className="lg:text-[40px] md:text-[32px] text-[24px] font-semibold text-[white]">Low-Fat Meat</h3>
                    <p className="text-[18px] pb-3">Started at <span className="text-[20px] font-semibold text-[#FF8A00]">$79.99</span></p>
                    <Link to={"/shop"} className="flex items-center gap-2 bg-white py-3.5 px-8 rounded-3xl ">
                        <button className="text-sm text-[#00B207] font-semibold">Shop Now </button>
                        <img src={right} alt="Right-icon" />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center relative">
                <img src={fruits} alt="fruits image" />
                <div className="flex flex-col items-center gap-2 absolute top-8">
                    <p className="text-sm font-medium">Summer Sale</p>
                    <h3 className="lg:text-[40px] md:text-[32px] text-[24px] font-semibold">100% Fresh Fruit</h3>
                    <p className="text-[18px] pb-3">Up to<span className="py-1.5 px-3 bg-black text-[#FCC900] m-3">64% OFF</span></p>
                    <Link to={"/shop"} className="flex items-center gap-2 bg-white py-3.5 px-8 rounded-3xl ">
                        <button className="text-sm text-[#00B207] font-semibold">Shop Now </button>
                        <img src={right} alt="Right-icon" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
