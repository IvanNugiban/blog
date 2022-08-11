import React from 'react';
import {ITypographyParams} from "../../types/TypographyTypes";
import {useTheme} from "@mui/material/styles";
import styled from "@emotion/styled";
import ElementWithChildren from "../../types/ElementWithChildren";


const StyledParagraph = styled.p<ITypographyParams>`
  ${({styles}) => ({...styles})}
`


const Paragraph4 = ({children}: ElementWithChildren) => {
    const {paragraph4} = useTheme()
    return (
        <StyledParagraph styles={paragraph4}>
            {children}
        </StyledParagraph>
    );
};

export default Paragraph4;