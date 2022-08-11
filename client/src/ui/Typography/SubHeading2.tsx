import React from 'react';
import {useTheme} from "@mui/material/styles";
import styled from "@emotion/styled";
import {IElementParams} from "../../types/declarations/theme"

interface IProps {
    children: React.ReactNode;
    textTransform?: string;
}

interface SubHeadingProps {
    styles: IElementParams;
    textTransform?: string;
}

const StyledSubHeading = styled.h3<SubHeadingProps>`
  text-transform: ${({textTransform}) => textTransform || "none"};
  ${({styles}) => ({...styles})}
`


const SubHeading2 = ({children, textTransform}: IProps) => {
    const {sub_heading2} = useTheme()
    return (
        <StyledSubHeading textTransform={textTransform} styles={sub_heading2}>
            {children}
        </StyledSubHeading>
    );
};

export default SubHeading2;