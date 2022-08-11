import styled from '@emotion/styled';
import React from 'react';
import {Link} from "react-router-dom";
import NotFoundImg from "../assets/images/NotFound.png"
import Heading from "../ui/Typography/Heading";
import Button from "../ui/Button/Button";
import {useTranslation} from "react-i18next";
import Paragraph1 from "../ui/Typography/Paragraph1";
import Container from "../ui/Container/Container";

const NotFound = styled.div`
  padding: 120px 0 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  text-align: center;
`



const NotFoundPage = () => {
    const {t} = useTranslation();

    return (
        <Container>
        <NotFound >
           <img alt="Page not found" src={NotFoundImg}/>
            <Heading>{t("page_not_found")}</Heading>
            <Paragraph1>{t("page_not_found_paragraph")}</Paragraph1>
            <Link data-testid="returnToHome" to="/"><Button >{t("back_to_home")}</Button></Link>
        </NotFound>
        </Container>
    );
};

export default NotFoundPage;