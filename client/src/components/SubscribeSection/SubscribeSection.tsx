import React from 'react';
import styled from "@emotion/styled";

import MailBox from '../../assets/images/Mail.png'
import {useTheme} from "@mui/material/styles";
import {useTranslation} from "react-i18next";
import Paragraph1 from "../../ui/Typography/Paragraph1";
import SubscribeForm from "../SubscirbeForm/SubscribeForm";
import Container from "../../ui/Container/Container";
import ElementWithBackgroundProp from "../../types/ElementWithBackgroundProp";



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const FormWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 609px;
`

const StyledSubscribeSection = styled.section<ElementWithBackgroundProp>`
  padding: 58px 0;
  background-color: ${({background}) => background};
`

const SubscribeTitle = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  text-transform: capitalize;
  margin-top: 30px;
`

const SubscribeSection = () => {
    const {background} = useTheme();
    const {t} = useTranslation();

    return (
        <StyledSubscribeSection data-testid="subscribe" background={background.light_gray}>
            <Container>
                <Wrapper>
                    <img src={MailBox} alt="Mail box"/>
                    <SubscribeTitle>{t("subscribe_for_updates")}</SubscribeTitle>
                    <Paragraph1>{t("subscribe_for_updates_subtitle")}</Paragraph1>
                    <FormWrapper>
                        <SubscribeForm/>
                    </FormWrapper>
                </Wrapper>
            </Container>
        </StyledSubscribeSection>
    )
        ;
};

export default SubscribeSection;