import React from 'react'
import styled from 'styled-components'

const ButtonDiv = styled.div`

`;
const Button = styled.button`

`;

const SubmitButton = (props) => {
    return(
        <ButtonDiv>
            <Button type='submit' name='submit'>Submit</Button>
        </ButtonDiv>
    )
}

export default SubmitButton