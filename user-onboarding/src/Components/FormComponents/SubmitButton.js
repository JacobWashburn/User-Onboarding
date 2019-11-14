import React from 'react'
import styled from 'styled-components'
import {Field} from "formik";

const ButtonDiv = styled.div`

`;
const Button = styled.button`

`;

const SubmitButton = (props) => {
    return(
        <ButtonDiv>
            <Button type='submit'>Submit</Button>
        </ButtonDiv>
    )
}

export default SubmitButton