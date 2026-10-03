
import Banner from "../../Components/Banner";
import Middle_header from "../../Components/Middle_header";
import Top_header from "../../Components/Top_header";
import Bottom_navbar from '../../Components/Bottom_navbar/index';
import Newsletter from "../../Components/Newsletter";
import Footer from "../../Components/Footer";
import CreateAccount from "../../Components/CreateAccount";
import SideBar from "../../Components/SideBar";

export default function Register() {
  const pageName = ""
  const childPageWord = ""
  const className = "bg-[#333333] text-[#B3B3B3]"

  return (
    <div>
      <Top_header className={className} />
      <Middle_header />
      <hr className="border-gray-300" />
      <Bottom_navbar />
      <div className="absolute left-3 z-50">
        <SideBar />
      </div>
      <Banner childPageWord="Create Account" pageName="Account" />
      <CreateAccount />
      <Newsletter />
      <Footer />
    </div>
  )
}
