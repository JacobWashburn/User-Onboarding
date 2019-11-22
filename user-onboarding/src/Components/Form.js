import React from 'react';
import styled from 'styled-components';
import {withFormik, Form} from "formik";
import * as Yup from 'yup';
import axios from 'axios'

import Name from './FormComponents/Name';
import Email from './FormComponents/Email';
import Password from './FormComponents/Password';
import TOS from './FormComponents/T-O-S';
import SubmitButton from './FormComponents/SubmitButton';

const FormWrapper = styled.div`

`;

const OnboardForm = (props) => {

    return (
        <FormWrapper>
            <Form>
                <Name props={props}/>
                <Email props={props}/>
                <Password props={props}/>
                <TOS props={props}/>
                <SubmitButton props={props}/>
            </Form>
        </FormWrapper>
    );
};

const FormikOnboardForm = withFormik({
    mapPropsToValues ({name, email, password, tos}) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            tos: tos || false,
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
        tos: Yup.string().required(),
    }),
    handleSubmit (values, {setStatus}) {
        axios.post("https://reqres.in/api/users/", values)
            .then(response => {
                setStatus(response.data)
                console.log(response)
            })
            .catch(error => console.log(error.response))
            .finally(values.resetForm)
    }
})(OnboardForm);

export default FormikOnboardForm;