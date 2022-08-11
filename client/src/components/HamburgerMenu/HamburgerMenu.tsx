import React, {useRef} from 'react';
import {Drawer, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import styled from "@emotion/styled";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface IProps {
    isActive: boolean,
    closeMenu: () => void;
}



const CloseButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
`

const HamburgerMenu = ({isActive, closeMenu}: IProps) => {
    const hamburgerMenuRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(hamburgerMenuRef, () => closeMenu());
    return (
        <Drawer
            ref={hamburgerMenuRef}
            anchor="right"
            variant="persistent"
            aria-label="Open menu"
            open={isActive}
        >
            <CloseButton onClick={() => closeMenu()}>
                <CloseIcon/>
            </CloseButton>
            <HeaderMenu onClick={() => closeMenu()}/>
        </Drawer>
    );
};

export default HamburgerMenu;