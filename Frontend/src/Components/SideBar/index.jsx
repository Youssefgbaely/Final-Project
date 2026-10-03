
import { Link } from 'react-router'
import down from "../../assets/icons/Chevron Down.png"
import phoneCall from "../../assets/icons/PhoneCall 1.png"
import { useContext } from 'react'
import { storeContext } from '../../Store'

export default function SideBar() {
    const { side, disappearSidebar } = useContext(storeContext)

    return (
        <>
            {
                side ? (<div className='bg-black/25 grid w-fit lg:hidden absolute'>
                    < div className='flex flex-col gap-5 py-5 px-6 ' >
                        <div className='flex items-center gap-1 hover:bg-white duration-500 hover:rounded'>
                            <Link to={"/"} className='text-white hover:text-black duration-500'>
                                Home
                            </Link>
                            <img src={down} alt="Down-icon" />
                        </div>
                        <div className='flex items-center gap-1 hover:bg-white duration-500 hover:rounded'>
                            <Link to={"/shop"} className='text-white hover:text-black duration-500'>
                                Shop
                            </Link>
                            <img src={down} alt="Down-icon" />
                        </div>
                        <div className='flex items-center gap-1 hover:bg-white duration-500 hover:rounded'>
                            <Link to={"/pages"} className='text-white hover:text-black duration-500'>
                                Pages
                            </Link>
                            <img src={down} alt="Down-icon" />
                        </div>
                        <div className='flex items-center gap-1 hover:bg-white duration-500 hover:rounded'>
                            <Link to={"/blog"} className='text-white hover:text-black duration-500'>
                                Blog
                            </Link>
                            <img src={down} alt="Down-icon" />
                        </div>
                        <div className='flex items-center gap-1 hover:bg-white duration-500 hover:rounded'>
                            <Link to={"/about"} className='text-white hover:text-black duration-500'>
                                About Us
                            </Link>
                            <img src={down} alt="Down-icon" />
                        </div>
                        <div className='flex items-center gap-1 hover:bg-white duration-500 hover:rounded'>
                            <Link to={"/contact"} className='text-white hover:text-black duration-500'>
                                Contact Us
                            </Link>
                            <img src={down} alt="Down-icon" />
                        </div>
                    </div >
                </div >) : null
            }
        </>


    )
}
