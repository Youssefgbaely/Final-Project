// use Link for i use Route 
import { Link } from 'react-router'
// import images from assets folder
import down from "../../assets/icons/Chevron Down.png"
import phoneCall from "../../assets/icons/PhoneCall 1.png"
// import useContext for use context API 
import { useContext } from 'react'
// storeContext is container of usestate or function in Store
import { storeContext } from '../../Store'


export default function Bottom_navbar({className=""}) {
  
  const {disappearSidebar} = useContext(storeContext)
  return (
    // use className varabile for somtimes in some pages design different this more reusable
    <div className={`${className}`}>
      <div className='container flex items-center justify-between'>
        {/* this design disapper in large screen */}
        {/* sidebar link apper when click on this icon */}
        <div onClick={disappearSidebar} className='lg:hidden cursor-pointer'>
          <svg className={`${className}`} xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z" />
          </svg>
        </div >
        <div className='hidden gap-7 py-5 lg:flex'>
          <div className='flex items-center gap-1'>
            <Link to={"/"} className={`${className}`}>
              Home
            </Link>
            <img src={down} alt="Down-icon" />
          </div>
          <div className='flex items-center gap-1'>
            <Link to={"/shop"} className={`${className}`}>
              Shop
            </Link>
            <img src={down} alt="Down-icon" />
          </div>
          <div className='flex items-center gap-1'>
            <Link to={"/pages"} className={`${className}`}>
              Pages
            </Link>
            <img src={down} alt="Down-icon" />
          </div>
          <div className='flex items-center gap-1'>
            <Link to={"/blog"} className={`${className}`}>
              Blog
            </Link>
            <img src={down} alt="Down-icon" />
          </div>
          <div className='flex items-center gap-1'>
            <Link to={"/about"} className={`${className}`}>
              About Us
            </Link>
            <img src={down} alt="Down-icon" />
          </div>
          <div className='flex items-center gap-1'>
            <Link to={"/contact"} className={`${className}`}>
              Contact Us
            </Link>
            <img src={down} alt="Down-icon" />
          </div>
        </div>
        <div className='flex gap-2'>
          <img src={phoneCall} alt="Phone call" />
          <p className={`${className} text-[14px] font-medium`}>(219) 555-0114</p>
        </div>
      </div>

    </div>
  )
}
