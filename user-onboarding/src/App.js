import React from 'react';
import styled from 'styled-components';

import './App.css';
import FormikOnboardForm from './Components/Form';

const AppDiv = styled.div`

`;

function App () {
    return (
        <AppDiv className="App">
            <FormikOnboardForm/>
        </AppDiv>
    );
}

export default App;
