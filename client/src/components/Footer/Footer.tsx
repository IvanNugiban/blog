import React from 'react';
import styled from "@emotion/styled";
import {useTheme} from "@mui/material/styles";
import Container from "../../ui/Container/Container";
import FooterInfo from "../FooterInfo/FooterInfo";
import Paragraph4 from "../../ui/Typography/Paragraph4";
import {useTranslation} from "react-i18next";
import ElementWithBackgroundProp from "../../types/ElementWithBackgroundProp";


const StyledFooter = styled.footer<ElementWithBackgroundProp>`
  background-color: ${({background}) => background};
  padding: 70px 0 25px 0;
`

const Initials = styled.div`
  padding-top: 26px;
  display: flex;
  justify-content: space-between;
`


const Footer = () => {
    const {background} = useTheme();
    const {t} = useTranslation();
    return (
        <StyledFooter data-testid="footer" background={background.light_gray2}>
            <Container>
                <FooterInfo/>
                <Initials>
                    <Paragraph4>© 2022 IvanNugiban</Paragraph4>
                    <Paragraph4>{t("made_with_love")}</Paragraph4>
                </Initials>
            </Container>
        </StyledFooter>
    );
};

export default Footer;