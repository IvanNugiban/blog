import React from 'react';
import {ITypographyParams} from "../../types/TypographyTypes";
import {useTheme} from "@mui/material/styles";
import styled from "@emotion/styled";
import ElementWithChildren from "../../types/ElementWithChildren";


const StyledParagraph = styled.p<ITypographyParams>`
  ${({styles}) => ({...styles})}
`


const Paragraph1 = ({children}: ElementWithChildren) => {
    const {paragraph1} = useTheme()
    return (
        <StyledParagraph styles={paragraph1}>
            {children}
        </StyledParagraph>
    );
};

export default Paragraph1;