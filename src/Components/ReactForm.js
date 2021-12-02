import {Formik} from 'formik'
import {loginSchema} from "../Utils/Validation";
import CustomForm from "./Form";

function ReactForm() {


    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password:'',
                    description:'',
                    color:'',
                    ahmedTerms:''
                }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={loginSchema}
                children={CustomForm}
            />
        </div>
    );
}

export default ReactForm;