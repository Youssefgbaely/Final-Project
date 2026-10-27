import check from "../../assets/icons/Check.png"
import vegebaleVideo from "../../assets/videos/Slow Motion Stock Video Footage - Vegetables(1080P_HD).mp4"
import discount from "../../assets/icons/discount.png"
import organic from "../../assets/icons/organic.png" 

export default function DescriptionProduct() {
    return (
        <div className='container pt-5'>
            
            <div className='py-6 grid lg:grid-cols-2 lg-gap-52 md:gap-10 gap-1 md:grid-cols-1 pb-10'>
                <div>
                    <div className="text-[#808080]">Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.
                        <p className='py-6'>Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src={check} alt="check-icon" />
                        <h3 className="text-[#808080]">100 g of fresh leaves provides.</h3>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src={check} alt="check-icon" />
                        <h3 className="text-[#808080]">Aliquam ac est at augue volutpat elementum.</h3>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src={check} alt="check-icon" />
                        <h3 className="text-[#808080]">Quisque nec enim eget sapien molestie.</h3>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src={check} alt="check-icon" />
                        <h3 className="text-[#808080]">Proin convallis odio volutpat finibus posuere.</h3>
                    </div>
                    <p className="pt-5 text-[#808080]">Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa.</p>
                </div>
                <div>
                    <video src={vegebaleVideo} className="w-134 h-75 xl:pb-8 pb-4"></video>
                    <div className="grid grid-cols-2 border border-[#E5E5E5] xl:w-134 lg:w-100 py-6 px-5">
                        <div className="flex items-center gap-3">
                            <img src={discount} alt="discount-icon" />
                            <div className="flex flex-col justify-center">
                                <h4 className="font-medium">{ } Discount</h4>
                                <p className="text-[#808080]">Save your { } money with us</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={organic} alt="organic-icon" />
                            <div className="flex flex-col justify-center">
                                <h4 className="font-medium">100% Organic</h4>
                                <p className="text-[#808080]">100% Organic Vegetables</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
