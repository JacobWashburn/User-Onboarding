import React from 'react';
import styled from 'styled-components';
import {Field} from "formik";

const NameDiv = styled.div`

`;


const Name = () => {
    return (
        <NameDiv>
            <Field/>
        </NameDiv>
    );
};

export default Name;