// import images from assets folder for use it in this shop
import trendBanner from "../../assets/images/banners/signIn banner.jpg"
import homeIcon from "../../assets/icons/home-icon.png"
import small_right from "../../assets/icons/small-right.png"
// import Link for in this shop i use route
import { Link } from "react-router"

export default function Banner({childPageWord , pageName , hiddenImg}) {

  return (
    // parent relative because some childern absolute
    <div className="relative">
        {/* banner image */}
        <img src={trendBanner} alt="Trend-banner" className="scale-x-[-1] h-30 w-full object-cover object-center"/>
        {/* child absolute for it layer more than banner image(brother) */}
        <div className="absolute top-13 left-2 lg:left-28 md:left-10 flex items-center justify-center gap-2 lg:gap-4 md:gap-4">
            <Link to={"/"}>
               <img src={homeIcon} alt="Home-icon" />
            </Link>
            {/* this rghit icon */}
           <img src={small_right} alt="Small-Right" />
           {/* this paragraph Reusable pageName is prop son name of home page */}
           <p className="text-[16px] text-[#999999] font-normal cursor-pointer">{pageName}</p>
           {/* sometimes need this icon hidden because home sometimes has only child but hasn't Grandchild */}
           <img src={small_right} alt="Small-Right" className={`${hiddenImg}`}/>
           {/* this paragraph Reusable pageName is prop Grandchild name of home page*/}
           <p className="text-[16px] text-[#00B207] font-normal cursor-pointer inline-block transition-transform duration-200 active:scale-125">{childPageWord}</p>
        </div>
    </div>
  )
}
