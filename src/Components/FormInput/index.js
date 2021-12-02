import {Field} from "formik";

function FormInput({
        type,
        name,
        placeholder,
    errors,
       touched,
        label,component='input'
                   }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field
                type={type}
                name={name}
                placeholder={placeholder} autoComplete={'off'}

                component={component}
            />
            {errors[name] && touched[name]
            &&<div className={'error'}>{errors[name]}</div>}
        </div>
    );
}

export default FormInput;