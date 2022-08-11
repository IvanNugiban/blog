import React from 'react';
import {ITypographyParams} from "../../types/TypographyTypes";
import {useTheme} from "@mui/material/styles";
import styled from "@emotion/styled";
import ElementWithChildren from "../../types/ElementWithChildren";


const StyledSubHeading = styled.h2<ITypographyParams>`
  ${({styles}) => ({...styles})}
`


const SubHeading1 = ({children}: ElementWithChildren) => {
    const {sub_heading1} = useTheme()
    return (
        <StyledSubHeading styles={sub_heading1}>
            {children}
        </StyledSubHeading>
    );
};

export default SubHeading1;