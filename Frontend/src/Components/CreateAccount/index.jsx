import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router';

export default function CreateAccount() {
    return (
        <div className='container items-center justify-center h-full'>
            <div className='w-74 lg:w-130 md:w-130 h-[371] bg-[white] shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex flex-col justify-center gap-3 my-25 py-5 rounded mx-auto'>
                <h2 className='text-[28px] lg:text-[32px] md:text-[32px] font-semibold text-[#1A1A1A] m-auto'>Sign In</h2>
                <Formik initialValues={{ email: "", password: "" }} >
                    <Form className="flex flex-col gap-4">
                        <Field type="text" name="email" placeholder="Email" className="border border-[#E5E5E5]  rounded w-2/3 lg:w-5/6 md:w-5/6 p-2 mx-auto" />
                        <div className='relative w-2/3 lg:w-5/6 md:w-5/6 mx-auto'>
                            <Field type="password" name="password" placeholder="Password" className="block w-full border border-[#E5E5E5] rounded p-2 pr-10" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='absolute right-2 lg:right-5 md:right-5 bottom-3 '>
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" fillRule="evenodd" d="M2.065 12.31c.13.29 3.275 7.19 9.935 7.19s9.805-6.895 9.935-7.19l.145-.33l-.165-.32c-.15-.295-3.78-7.16-9.915-7.16c-6.66 0-9.805 6.905-9.935 7.2l-.135.305zM12 18c-4.95 0-7.755-4.735-8.415-5.995C4.245 10.74 7.055 6 12 6c4.525 0 7.635 4.73 8.4 6.025C19.72 13.32 16.95 18 12 18m-4-6c0 2.205 1.795 4 4 4s4-1.795 4-4s-1.795-4-4-4s-4 1.795-4 4m1.5 0a2.501 2.501 0 0 1 5 0a2.5 2.5 0 0 1-5 0" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className='relative w-2/3 lg:w-5/6 md:w-5/6 mx-auto'>
                            <Field type="password" name="password" placeholder="Confirm Password" className="block w-full border border-[#E5E5E5] rounded p-2 pr-10" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='absolute right-2 lg:right-5 md:right-5 bottom-3 '>
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" fillRule="evenodd" d="M2.065 12.31c.13.29 3.275 7.19 9.935 7.19s9.805-6.895 9.935-7.19l.145-.33l-.165-.32c-.15-.295-3.78-7.16-9.915-7.16c-6.66 0-9.805 6.905-9.935 7.2l-.135.305zM12 18c-4.95 0-7.755-4.735-8.415-5.995C4.245 10.74 7.055 6 12 6c4.525 0 7.635 4.73 8.4 6.025C19.72 13.32 16.95 18 12 18m-4-6c0 2.205 1.795 4 4 4s4-1.795 4-4s-1.795-4-4-4s-4 1.795-4 4m1.5 0a2.501 2.501 0 0 1 5 0a2.5 2.5 0 0 1-5 0" clipRule="evenodd" />
                            </svg>
                        </div>
                        <label className='flex items-center justify-between w-2/3 lg:5/6 md:5/6 pl-13'>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    name="rememberMe"
                                    className="w-4 h-4 accent-[#2C742F] cursor-pointer"
                                />

                                <span className="text-sm text-gray-600">
                                    Accept all terms & Conditions
                                </span>
                            </label>
                        </label>
                        <button className='w-2/3 mx-auto lg:w-5/6 md:w-5/6 bg-[#00B207] text-white rounded-3xl p-2 cursor-pointer'>Create Account</button>
                    </Form>
                </Formik>
                <p className='mx-auto text-sm text-[#666666]'>Already have account <Link to={"/account/login"} className='text-[#1A1A1A] font-medium'>Login</Link></p>
            </div>
        </div>
    )
}
