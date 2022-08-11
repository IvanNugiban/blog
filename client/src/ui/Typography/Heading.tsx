import React from 'react';
import {useTheme} from "@mui/material/styles";
import styled from "@emotion/styled";
import {IElementParams} from "../../types/declarations/theme"

interface IProps {
    children: React.ReactNode;
    textTransform?: string;
}

interface StyledHeadingProps {
    styles: IElementParams;
    textTransform?: string;
}

const StyledHeading = styled.h1<StyledHeadingProps>`
  text-transform: ${({textTransform}) => textTransform || "none"};
  ${({styles}) => ({...styles})};
  @media screen and (max-width: 500px) {
  font-size: calc(${({styles}) => styles.fontSize} / 1.5)
  }
`


const Heading = ({children, textTransform}: IProps) => {
    const {heading} = useTheme()
    return (
        <StyledHeading textTransform={textTransform} styles={heading}>
            {children}
        </StyledHeading>
    );
};

export default Heading;