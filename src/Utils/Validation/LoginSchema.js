import * as yup from "yup";

function loginSchema() {

    return yup.object({
        email:yup.string()
            .email("Email is invalid")
            .required("Email is required"),
        password:yup.string()
            .min(8)
            .required("password is required"),
        description:yup.string()
            //Second parameter is the message
            .min(200,"Min 200 Char"),
        ahmedTerms:yup.bool()
            .oneOf([true], "Field must be checked")
            .required("Please select ahmedTerms"),
        color:yup.string()
            .oneOf(['red'], "Field must be red")
            .required("Select red")
    })
}

export default loginSchema;