import React from 'react';
import styled from "@emotion/styled";
import Heading from "../../ui/Typography/Heading";
import welcomeBackground from "../../assets/backgrounds/welcomeBackgroundpng.png";
import welcomeMan from "../../assets/images/welcomeMan.png"
import Container from "../../ui/Container/Container";
import Paragraph1 from "../../ui/Typography/Paragraph1";
import SubscribeForm from "../SubscirbeForm/SubscribeForm";
import {useTranslation} from "react-i18next";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IconButton} from "@mui/material";

const Wrapper = styled.div`
  height: 900px;
  background: url(${welcomeBackground});
  @media screen and (max-width: 1200px) {
    height: 700px;
  }

`

const ScrollButton = styled(IconButton)`
  position: absolute;
  bottom: 20px;
  left: calc(50% - 35px);
  @media screen and (max-width: 400px) {
    bottom: -50px;
  }
`

const StyledWelcome = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextColumn = styled.div`
  white-space: pre-line;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-right: 115px;
  @media screen and (max-width: 1200px) {
    margin-right: 20px;
  }

`


const ResponsiveImage = styled.img`
  @media screen and (max-width: 1200px) {
    width: 375px;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`




const Welcome = () => {
    const {t} = useTranslation();
    return (
        <Wrapper>
            <Container>
                <StyledWelcome>
                    <TextColumn>
                        <Heading>{t("welcome_title")}</Heading>
                        <Paragraph1>{t("welcome_paragraph")}</Paragraph1>
                        <SubscribeForm/>
                    </TextColumn>
                    <ResponsiveImage src={welcomeMan} alt="Man"/>
                    <a data-testid="scroll" href={"#scroll"}>
                    <ScrollButton  id="scroll" >
                      <KeyboardArrowDownIcon fontSize="large"/>
                    </ScrollButton>
                    </a>
                </StyledWelcome>
            </Container>
        </Wrapper>
    );
};

export default Welcome;