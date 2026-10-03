import { Field, Form, Formik } from "formik"
import search from "../../assets/icons/Search.png"
import leaf from "../../assets/icons/plant 1.jpg"
import heart from "../../assets/icons/Heart.png"
import cart from "../../assets/icons/Cart.png"
import { Link } from "react-router"

export default function Middle_header() {
  return (
    <div className='container flex gap-3 md:gap-0 lg:gap-0 justify-between items-center py-4 flex-wrap md:flex-nowrap lg:flex-nowrap'>
      <div className="flex items-center gap-2">
        <img className="w-6 h-6 cursor-pointer" src={leaf} alt="leaf-icon" />
        <h1 className=" text-[26px] lg:text-[32px]  font-medium cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-3">Ecobazar</h1>
      </div>
      <div>
        <Formik initialValues={{ ProductName: "" }}>
          <Form className="flex items-center ">
            <div className="flex items-center border border-[#CCCCCC] rounded pl-2">
              <img src={search} alt="search-icon" />
              <Field type="text" name="ProductName" placeholder="Search" className="outline-none " />
              <button className="py-3 px-6 md:py-1 md:px-3 bg-[#00B207] cursor-pointer hover:bg-[#01da01] duration-400 text-white">Search</button>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="flex items-center  gap-1 lg:gap-4">
        <img src={heart} alt="heart-icon" className="hidden lg:flex" />
        <span className="text-[#CCCCCC] hidden lg:flex">|</span>
        <Link to={"/shop-cart"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 256 256">
            <path d="M0 0h256v256H0z" fill="none" />
            <path fill="currentColor" d="M216 68h-44v-4a44 44 0 0 0-88 0v4H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h176a12 
          12 0 0 0 12-12V80a12 12 0 0 0-12-12M92 64a36 36 0 0 1 72 0v4H92Zm128 136a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h44v20a4 
          4 0 0 0 8 0V76h72v20a4 4 0 0 0 8 0V76h44a4 4 0 0 1 4 4Z" />
          </svg>
        </Link>
        <div>
          <p className="text-[#4D4D4D]">Shopping cart:</p>
          <p>$57.00</p>
        </div>
      </div>
    </div>
  )
}
