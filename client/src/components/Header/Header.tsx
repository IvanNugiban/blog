import React, {useState} from 'react';
import styled from "@emotion/styled";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Container from "../../ui/Container/Container";
import {IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useWindowDimensions from "../../hooks/useWindowDemensions";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import {useTheme} from "@mui/material/styles";
import BlogTitle from "../BlogTitle/BlogTitle";

interface IWrapperProps {
    background: string,
    zIndex: number;
}

const Wrapper = styled.div<IWrapperProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: ${({zIndex}) => zIndex};
  background-color: ${({background}) => background};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`




const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const {background, zIndex} = useTheme();
    const {width} = useWindowDimensions();
    return (
        <>
        <Wrapper data-testid="header" background={background.light_gray} zIndex={zIndex.appBar}>
            <Container>
                <StyledHeader>
                    <BlogTitle/>
                    {
                        width > 800 ? <HeaderMenu/> : <IconButton onClick={() => setIsActive(true)} color="inherit">
                                <MenuIcon/>
                            </IconButton>
                    }
                </StyledHeader>
            </Container>
        </Wrapper>
            {
                width <= 800 && <HamburgerMenu isActive={isActive} closeMenu={() => setIsActive(false)}/>
            }
</>
)
    ;
};

export default Header;