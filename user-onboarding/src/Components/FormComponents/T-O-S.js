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
                Terms Of Service:
            <Field required type='checkbox' checked={false}/>
            </ChBoxLabel>
        </TOSdiv>
    )
}

export default TOS