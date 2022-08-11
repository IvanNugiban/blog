import React from 'react';
import styled from "@emotion/styled";
import ElementWithChildren from "../../types/ElementWithChildren";

const StyledContainer = styled.div`
  max-width: 1250px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
`

const Container = ({children} : ElementWithChildren) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
};

export default Container;