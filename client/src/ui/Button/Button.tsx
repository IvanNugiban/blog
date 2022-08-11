import React from 'react';
import {Button as MaterialButton} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import styled from "@emotion/styled";
import useWindowDimensions from "../../hooks/useWindowDemensions";

interface IProps {
    children: React.ReactNode;
    onClick?: () => void;
    id?:string;
}

const StyledButton = styled(MaterialButton)`
  min-width: 100px;
  height: 50px;
  border-radius: 8px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  text-transform: none;
`

const Button = ({children, onClick, id} : IProps) => {
    const theme = useTheme();
    const {width} = useWindowDimensions();

    return (
        <StyledButton id={id} fullWidth={width < 500} onClick={onClick} style={{background: theme.background.secondary_background}} variant="contained" size="medium">
            {children}
        </StyledButton>
    );
};

export default Button;