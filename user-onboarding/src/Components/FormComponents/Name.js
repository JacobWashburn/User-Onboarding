import React from 'react';
import styled from 'styled-components';
import {Field} from "formik";

const NameDiv = styled.div`

`;


const Name = (props) => {
    return (
        <NameDiv>
            <Field type='text' name='name' placeholder='Name'/>
        </NameDiv>
    );
};

export default Name;