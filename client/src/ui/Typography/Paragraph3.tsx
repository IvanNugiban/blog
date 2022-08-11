import React from 'react';
import {ITypographyParams} from "../../types/TypographyTypes";
import {useTheme} from "@mui/material/styles";
import styled from "@emotion/styled";
import ElementWithChildren from "../../types/ElementWithChildren";


const StyledParagraph = styled.p<ITypographyParams>`
  ${({styles}) => ({...styles})}
`


const Paragraph3 = ({children}: ElementWithChildren) => {
    const {paragraph3} = useTheme()
    return (
        <StyledParagraph styles={paragraph3}>
            {children}
        </StyledParagraph>
    );
};

export default Paragraph3;