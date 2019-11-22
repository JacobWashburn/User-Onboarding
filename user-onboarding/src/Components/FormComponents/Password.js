import React from 'react'
import styled from 'styled-components'
import {Field} from "formik";

const PasswordDiv = styled.div`

`;

const Password = (props) => {
    return(
        <PasswordDiv>
            <Field type='password' name='password' placeholder='Password'/>
        </PasswordDiv>
    )
}

export default Password