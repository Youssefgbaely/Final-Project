import facebook from "../../assets/icons/facebook.png"
import tiwetter from "../../assets/icons/tiwetter.png"
import p_icon from "../../assets/icons/p.png"
import instagram from "../../assets/icons/instgram.png"

export default function Newsletter() {
    return (
        <div className='container bg-[#F7F7F7] flex items-center  py-6 gap-10 xl:gap-15 flex-wrap lg:flex-nowrap'>
            <div className="w-md flex flex-col gap-3">
                <h2 className="text-[24px] font-semibold">Subcribe our Newsletter</h2>
                <p className="text-sm text-[#999999]">
                    Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
                    Phasellus imperdiet elit eu magna.
                </p>
            </div>
            <div className="flex items-center gap-7 xl:gap-10 flex-wrap lg:flex-nowrap">
                <div className=' lg:w-134 md:w-134 w-full flex items-center outline-none relative'>
                    <input type="email" placeholder='Your email address' className="p-4 outline-none 
                    rounded-4xl bg-[white] border border-[#E5E5E5] lg:grow md:grow grow-0 w-full"/>
                    <button className="lg:py-4 md:py-4 py-3 lg:px-10 md:px-10 px-5 bg-[#00B207] text-white rounded-4xl absolute 
                    lg:right-0 md:right-0 right-0 cursor-pointer">Subscribe
                    </button>
                </div>
                <div className="flex ">
                    <a href="/index">
                        <img src={facebook} alt="facebook-icon" />
                    </a>
                    <a href="/index">
                        <img src={tiwetter} alt="tiwetter-icon" />
                    </a>
                    <a href="/index">
                        <img src={p_icon} alt="P_icon" />
                    </a>
                    <a href="/index">
                        <img src={instagram} alt="instagram-icon" />
                    </a>

                </div>
            </div>
        </div>
    )
}
