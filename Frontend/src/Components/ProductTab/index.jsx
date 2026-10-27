import { useState } from 'react'
import DescriptionProduct from '../DescriptionProduct'
import AdditionalInfo from '../AdditionalInfo'
import FeedbackCustomer from '../FeedbackCustomer'

export default function ProductTab() {

    const [activeTab, setActiveTab] = useState("description")

    return (
        <div>
            <div className='flex mx-auto w-fit lg:gap-10 md:gap-10 gap-5 pb-5'>
                <p onClick={() => setActiveTab("description")}
                    className={`cursor-pointer pb-2 ${activeTab === "description"
                        ? "text-[#00B207] border-b-2 border-[#00B207]"
                        : "text-gray-500"
                        }`}>Descriptions
                </p>

                <p onClick={() => setActiveTab("info")}
                    className={`cursor-pointer pb-2 ${activeTab === "info"
                        ? "text-[#00B207] border-b-2 border-[#00B207]"
                        : "text-gray-500"
                        }`}>Additional Information
                </p>

                <p onClick={() => setActiveTab("feedback")}
                    className={`cursor-pointer pb-2 ${activeTab === "feedback"
                        ? "text-[#00B207] border-b-2 border-[#00B207]"
                        : "text-gray-500"
                        }`}>Customer Feedback
                </p>
            </div>
            <hr className='text-[#E5E5E5]' />

            {activeTab === "description" && <DescriptionProduct />}
            {activeTab === "info" && <AdditionalInfo />}
            {activeTab === "feedback" && <FeedbackCustomer />}

        </div>
    )
}
