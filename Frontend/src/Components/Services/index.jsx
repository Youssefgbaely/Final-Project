import carDelivery from "../../assets/icons/delivery-truck 1.png"
import CustomerService from "../../assets/icons/callCenter.png"
import BagShop from "../../assets/icons/shopping-bag.png"
import MoneyBack from "../../assets/icons/moneyBack.png"

export default function Services() {
    return (
        <div className="container ">
            <div className=" flex flex-wrap lg:flex-nowrap w-full shadow-[0_4px_15px_rgba(0,0,0,0.15)] py-5 pl-7 gap-6 md:gap-7 mb-4">
                <div className="flex items-center gap-3 w-full lg:w-1/4 md:w-[calc(50% - 14px)]">
                    <div className="scale-up-center">
                        <img  src={carDelivery} alt="Car-Delivery" />
                    </div>
                    <div>
                        <h4 className="text-[16px] font-semibold text-[#1A1A1A]">Free Shipping</h4>
                        <p className="text-[14px] font-normal text-[#999999]">Free shipping on all your order</p>
                    </div>
                </div>
                <div className=" flex items-center gap-3 w-full lg:w-1/4 md:w-[calc(50% - 14px)]">
                    <div className="scale-up-center">
                        <img src={CustomerService} alt="Customer-Service" />
                    </div>
                    <div>
                        <h4 className="text-[16px] font-semibold text-[#1A1A1A]">Customer Support 24/7</h4>
                        <p className="text-[14px] font-normal text-[#999999] ">Instant access to Support</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full lg:w-1/4 md:w-[calc(50% - 14px)]">
                    <div className="scale-up-center">
                        <img src={BagShop} alt="Customer-Service" />
                    </div>
                    <div>
                        <h4 className="text-[16px] font-semibold text-[#1A1A1A]">100% Secure Payment</h4>
                        <p className="text-[14px] font-normal text-[#999999] ">We ensure your money is save</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full lg:w-1/4 md:w-[calc(50% - 14px)]">
                    <div className="scale-up-center">
                        <img src={MoneyBack} alt="Money-Back" />
                    </div>
                    <div>
                        <h4 className="text-[16px] font-semibold text-[#1A1A1A]">Money-Back Guarantee</h4>
                        <p className="text-[14px] font-normal text-[#999999]">30 Days Money-Back Guarantee</p>
                    </div>
                </div>
            </div>


        </div>
    )
}
