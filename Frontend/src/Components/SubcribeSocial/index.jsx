import { useContext, useEffect, useState } from "react"
import subcribe from "../../assets/images/banners/Subcribe.png"
import { storeContext } from "../../Store"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { validationSchema } from "./validation"



export default function SubcribeSocial() {
    const { showPopup, setShowPopup } = useContext(storeContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 6000)
    }, [])

    const closePopupLay = () => {
        setShowPopup(false)
    }

    return (

        showPopup && (

            <div className="container mb-5 relative">
                <div className="xl:w-218 lg:w-180 p-3 flex items-center justify-between xl:flex-nowrap lg:flex-nowrap flex-wrap">
                    <img src={subcribe} alt="subcribeImage" className="lg:w-100 md:w-100 w-52.5" />
                    <svg onClick={closePopupLay} xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 32 32" className="absolute top-2 right-2 cursor-pointer">
                        <path d="M0 0h32v32H0z" fill="none" />
                        <path fill="currentColor" d="M17.414 16L26 7.414L24.586 6L16 14.586L7.414 6L6 7.414L14.586 16L6 24.586L7.414 26L16 17.414L24.586 26L26 24.586z" />
                    </svg>
                    <div className="flex flex-col items-center justify-center lg:gap-4 md:gap-4 gap-2 xl:w-100 lg:w-80 md:w-80 w-55 text-center">
                        <h2 className="lg:text-[40px] md:text-[40px] text-[28px] font-semibold mx-auto">Subcribe our Newsletter</h2>
                        <p className="text-[#999999]">Subscribe to our newlletter and Save your <span className="text-orange-500">20% money</span> with discount code today.</p>
                        <Formik validationSchema={validationSchema} initialValues={{ email: "", }} onSubmit={(value) => { console.log(value); alert("You have subscribed successfully!"); setShowPopup(false) }}>
                            <div>
                                <Form className='xl:w-100 lg:w-80 md:w-90 w-65 flex items-center outline-none relative'>
                                    <Field type="email" name="email" placeholder='Enter your email' className="p-3 outline-none rounded-4xl bg-[white] border border-[#E5E5E5] lg:grow md:grow grow-0 w-full" />
                                    <button type="submit" className="py-3 lg:px-8 md:px-7 px-5 bg-[#00B207] text-white rounded-4xl absolute lg:right-0 md:right-0 right-0 cursor-pointer">Subscribe
                                    </button>
                                </Form>
                                <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                            </div>
                        </Formik>
                        <div className="flex items-center gap-2 lg:pt-6 md:pt-6 pt-4" >
                            <input type="checkbox" id="doNotShow" className="accent-[#00B207]" />
                            <label htmlFor="doNotShow" className="text-sm text-[#666666]">Do not show this window</label>
                        </div>

                    </div>
                </div>
            </div>


        )


    )
}
