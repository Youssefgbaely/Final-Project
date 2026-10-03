import leaf2_icon from "../../assets/icons/palnt2.png"
import applePay from "../../assets/icons/ApplePay.png"
import visa from "../../assets/icons/visa-logo.png"
import discover from "../../assets/icons/Discover.png"
import masterCard from "../../assets/icons/Mastercard.png"
import securePay from "../../assets/icons/secure-payment.png"

export default function Footer() {
  return (
    <div className='bg-[#1A1A1A]'>
      <div className='container text-white grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 py-8'>
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="flex items-center gap-2">
            <img src={leaf2_icon} alt="leaf_icon" />
            <h2 className="text-[24px] lg:text-[32px] md:text-[32px] font-medium">Ecobazar</h2>
          </div>
          <p className="text-[#808080] text-sm">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
          <div>
            <span className="text-sm font-medium">
              (219) 555-0114
            </span>
            <span className="text-sm font-medium px-3 text-[#808080]">or</span>
            <span className="text-sm font-medium">
              Proxy@gmail.com
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <h3 className="text-[16px] font-medium">My Account</h3>
          <p className="paragraphColor">My Account</p>
          <p className="paragraphColor">Order History</p>
          <p className="paragraphColor">Shoping Cart</p>
          <p className="paragraphColor">Wishlist</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <h3 className="text-[16px] font-medium">Helps</h3>
          <p className="paragraphColor">Contact</p>
          <p className="paragraphColor">Faqs</p>
          <p className="paragraphColor">Terms & Condition</p>
          <p className="paragraphColor">Privacy Policy</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <h3 className="text-[16px] font-medium">Proxy</h3>
          <p className="paragraphColor">About</p>
          <p className="paragraphColor">Shop</p>
          <p className="paragraphColor">Product</p>
          <p className="paragraphColor">Track Order</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <h3 className="text-[16px] font-medium">Categories</h3>
          <p className="paragraphColor">Fruit & Vegetables</p>
          <p className="paragraphColor">Meat & Fish</p>
          <p className="paragraphColor">Bread & Bakery</p>
          <p className="paragraphColor">Beauty & Health</p>
        </div>
      </div>
      <div className="container">
        <hr className="text-[#333333]" />
        <div className="flex items-center justify-between py-4 flex-wrap lg:no-wrap gap-4">
          <p className="paragraphColor">Ecobazar eCommerce © 2021. All Rights Reserved</p>
          <div className="flex items-center justify-center lg:gap-4 md:gap-4 gap-3">
            <img src={applePay} alt="ApplePay" className="border border-[#333333] lg:p-2 md:p-2 p-1"/>
            <img src={visa} alt="Visa" className="border border-[#333333] lg:p-2 md:p-2 p-1"/>
            <img src={discover} alt="Discover" className="border border-[#333333] lg:p-2 md:p-2 p-1"/>
            <img src={masterCard} alt="Master Card" className="border border-[#333333] lg:p-2 md:p-2 p-1"/>
            <img src={securePay} alt="secure-payment"/>
          </div>
        </div>
      </div>
    </div>
  )
}
