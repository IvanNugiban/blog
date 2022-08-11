import React from 'react';
import styled from "@emotion/styled";
import Heading from "../ui/Typography/Heading";
import Container from "../ui/Container/Container";
import Paragraph1 from "../ui/Typography/Paragraph1";
import {useTranslation} from "react-i18next";
import Redux from "../assets/images/redux.png"
import ReactImg from "../assets/images/react.png"
import Css from "../assets/images/css.png"
import Html from "../assets/images/html.png"
import Typescript from "../assets/images/typescirpt.png"

const About = styled.div`
  padding: 180px 0 40px 0;
  text-align: center;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`

const AboutImage = styled.img`
  display: inline-block;
  width: 100px;
  height: 100px;
  &:not(:last-of-type) {
    margin: 0 50px 0 0;
  }
  @media screen and (max-width: 600px) {
    display: block;
    &:not(:last-of-type) {
      margin: 0 0 50px 0;
    }
  }
`

const AboutMePage = () => {
    const {t} = useTranslation();
    return (
        <About data-testid="about">
            <Container>
                <Wrapper>
                    <Heading textTransform="uppercase">{t("about_me")}</Heading>
                    <Paragraph1>{t("about_me_paragraph")}</Paragraph1>
                    <div>
                        <AboutImage alt="Html" src={Html}/>
                        <AboutImage alt="Css" src={Css}/>
                        <AboutImage alt="React" src={ReactImg}/>
                        <AboutImage alt="Redux" src={Redux}/>
                        <AboutImage alt="Redux" src={Typescript}/>
                    </div>
                </Wrapper>
            </Container>
        </About>
    );
};

export default AboutMePage;