import * as yup from "yup"

export const validationSchema = yup.object({
    email: yup.string().required("Email is required").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please enter a valid email")
})