import React from 'react';
import styled from 'styled-components';
import {withFormik, Form} from "formik";
import Name from './FormComponents/Name';
import Email from './FormComponents/Email';
import Password from './FormComponents/Password';
import TOS from './FormComponents/T-O-S';
import SubmitButton from './FormComponents/SubmitButton';

const FormWrapper = styled.div`

`;

const OnboardForm = (props) => {
    const {values, errors, touched, status} = props;
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
    mapPropsToValues ({}) {
        return {};
    }
})(OnboardForm);

export default FormikOnboardForm;