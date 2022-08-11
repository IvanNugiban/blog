import React from 'react';
import styled from "@emotion/styled";
import {CircularProgress} from "@mui/material";

const StyledLoader = styled(CircularProgress)`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1000;
`

const Wrapper = styled.div`
  position: relative;
  min-height: 400px;
  height: 100%;
`

const Loader = () => {
 return (
     <Wrapper>
         <StyledLoader data-testid="loader"/>
     </Wrapper>
 )
};

export default Loader;