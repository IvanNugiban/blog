import React, {useEffect} from 'react';
import Heading from "../ui/Typography/Heading";
import SubHeading2 from "../ui/Typography/SubHeading2";
import Container from "../ui/Container/Container";
import styled from "@emotion/styled";
import letterImg from "../assets/images/letter.png"
import Paragraph2 from "../ui/Typography/Paragraph2";
import {Link, useNavigate, useParams} from "react-router-dom";
import Button from "../ui/Button/Button";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {baseUrl} from "../utils/constants";

const StyledUnsubscribePage = styled.div`
  padding: 120px 0;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 15px;
`

const Letter = styled.img`
  margin: 20px 0;
  height: 200px;
`

const UnsubscribePage = () => {

    const {t} = useTranslation();
    const {emailId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        async function unsubscribe() {
            try {
                await axios.delete(`${baseUrl}/api/email/unsubscribe`, {
                    params: {
                        emailId: emailId!.slice(1)
                    }
                })
            } catch (e) {
                console.log(e);
                navigate("/notFound")
            }
        }

        unsubscribe();

    }, [emailId, navigate])

    return (
        <StyledUnsubscribePage>
            <Container>
                <Wrapper>
                    <Heading>{t("miss_you_already")}</Heading>
                    <SubHeading2>({t("dont_worry")})</SubHeading2>
                    <Letter alt="Unsubscribed letter" src={letterImg}/>
                    <Paragraph2>{t("unsubscribe_message")}</Paragraph2>
                    <Link data-testid="returnToHome" to="/"><Button>{t("back_to_home")}</Button></Link>
                </Wrapper>
            </Container>
        </StyledUnsubscribePage>
    );
};

export default UnsubscribePage;