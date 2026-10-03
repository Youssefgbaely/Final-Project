// import { useContext } from "react";
import Banner from "../../Components/Banner";
import Middle_header from "../../Components/Middle_header";
import Top_header from "../../Components/Top_header";
// import Bottom_navbar from '../../Components/Bottom_navbar/index';
// import { storeContext } from "../../Store";
import Sign_in from "../../Components/Sign_in";
import Newsletter from "../../Components/Newsletter";
import Footer from "../../Components/Footer";
import Bottom_navbar from './../../Components/Bottom_navbar/index';
import { useContext } from "react";
import { storeContext } from "../../Store";
import SideBar from "../../Components/SideBar";


export default function Login() {
    const pageName = ""
    const childPageWord = ""
    const { className } = useContext(storeContext)
    return (
        <div>
            <Top_header className={className} />
            <Middle_header />
            <hr className="border-gray-300" />
            <Bottom_navbar />
            <div className="absolute left-3 z-50">
                <SideBar />
            </div>
            <Banner childPageWord="Login" pageName="Account" />
            <Sign_in />
            <Newsletter />
            <Footer />
        </div>
    )
}
