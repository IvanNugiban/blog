import React from 'react';
import {ITypographyParams} from "../../types/TypographyTypes";
import {useTheme} from "@mui/material/styles";
import styled from "@emotion/styled";

interface IProps {
    children: React.ReactNode;
    active?: boolean;
}

interface IParagraphProps extends ITypographyParams{
    active?: boolean;
}

const StyledParagraph = styled.p<IParagraphProps>`
  ${({styles}) => ({...styles})};
  color: ${({active}) => active ? "#FF6464" : "initial"}
`


const Paragraph2 = ({children, active}: IProps) => {
    const {paragraph2} = useTheme()
    return (
        <StyledParagraph active={active} styles={paragraph2}>
            {children}
        </StyledParagraph>
    );
};

export default Paragraph2;