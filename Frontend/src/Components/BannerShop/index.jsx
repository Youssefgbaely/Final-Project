import filterIcon from "../../assets/icons/Filter 24px.png"

export default function BannerShop() {
    return (
        <div className="container p-5 flex md:gap-15 lg:gap-23 gap-15">
            <div className="py-3.5 px-8 bg-[#00B207] text-white text-sm cursor-pointer w-fit flex items-center justify-center gap-3 rounded-3xl hover:bg-green-600 transition duration-400">
                <p>Filter</p>
                <img src={filterIcon} alt="Filter-Icon" />
            </div>
            <div className="flex items-center lg:gap-200 md:gap-70 gap-2 flex-wrap">
                <div className="flex items-center gap-3">
                    <p className="font-bold">Sort by:</p>
                    <p>Latest</p>
                </div>
                <div><span className="font-bold">52</span> Results Found</div>
            </div>
        </div>
    )
}
