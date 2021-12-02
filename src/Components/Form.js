import React from 'react';
import FormInput from "./FormInput";
import {Form} from "formik";
import ReactSelect from "./ReactSelect/ReactSelect";
import ReactSelectComponent from "./ReactSelect/ReactSelectComponent";

function CustomForm ({ errors, touched }) {
    return <Form>
        <FormInput
            type="email"
            name={"email"}
            placeholder={"Email"}
            touched={touched}
            errors={errors}
            label={'email'}
        />
        <FormInput
            type="password"
            name={"password"}
            placeholder={"Password"}
            touched={touched}
            errors={errors}
            label={'Password'}
        />
        <FormInput
            component="textarea"
            name={"description"}
            placeholder={"Description"}
            touched={touched}
            errors={errors}
            label={'Description'}
        />
        <FormInput type={'checkbox'}
            name={"ahmedTerms"}
            placeholder={"ahmedTerms"}
            touched={touched}
            errors={errors}
            label={'ahmedTerms'}
        />
        {/** HOC for passing a component that doesn't supported in formik*/}
        <ReactSelect as={ReactSelectComponent}/>
        <button type={'submit'}>submit</button>
    </Form>
}

export default CustomForm;