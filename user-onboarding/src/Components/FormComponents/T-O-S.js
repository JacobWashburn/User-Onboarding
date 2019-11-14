import React from 'react'
import styled from 'styled-components'
import {Field} from "formik";

const TOSdiv = styled.div`

`;
const ChBoxLabel = styled.label`

`;

const TOS = (props) => {
    return(
        <TOSdiv>
            <ChBoxLabel>
                Accept Our Terms Of Service:
            <Field type='checkbox' name='tos'/>
            </ChBoxLabel>
        </TOSdiv>
    )
}

export default TOS