import React from 'react'
import styled from 'styled-components'
import {Field} from "formik";

const EmailDiv = styled.div`

`;


const Email = (props) => {
    return(
        <EmailDiv>
            <Field required type='email' name='email' placeholder='Email'/>
        </EmailDiv>
    )
}

export default Email