import mapIcon from "../../assets/icons/Map Pin.png"
import eng from "../../assets/icons/ENG.png"
import usd from "../../assets/icons/USD.png"
import { Link } from "react-router"
import { useContext } from "react";
import { storeContext } from "../../Store";
// import { Link } from "react-router"

export default function Top_header({className = ""}) {
  return (
    <div className={`container py-4 text-[#666666] flex items-center justify-between ${className}`}>
      <div className="flex items-center gap-2">
        <img src={mapIcon} alt="map-icon" />
        <p className="hidden md:flex lg:flex">Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
      </div>
      <div className="flex items-center gap-7">
        <div className="flex gap-4">
          <img src={eng} alt="choose languge" />
          <img src={usd} alt="USD" />
        </div>
        <div className="flex gap-2">
          <Link to={"/account/login"} className="focus:text-[#2C742F] focus:drop-shadow-[0_2px_4px_rgba(44,116,47,0.35)]">Sign In /</Link>
          <p>Sign Up</p>
        </div>
      </div>
      
    </div>
  )
}
