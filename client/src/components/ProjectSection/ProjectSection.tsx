import React from 'react';
import styled from "@emotion/styled";
import Paragraph1 from "../../ui/Typography/Paragraph1";
import Button from "../../ui/Button/Button";
import {useTranslation} from "react-i18next";
import Carousel from "../../ui/Carousel/Carousel";

interface IProps {
    title: string;
    images: string[];
    description: string;
    link: string;
}

const StyledProjectSection = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 30px;
`

const ProjectTitle = styled.h2`
  font-size: 30px;
`


const ProjectSection = ({title, images, description, link}: IProps) => {
    const {t} = useTranslation();
    return (
        <StyledProjectSection>
            <ProjectTitle>{title}</ProjectTitle>
            <Carousel images={images}/>
            <Paragraph1>{description}</Paragraph1>
            <Button><a href={link}>{t("to_the_project")}</a></Button>
        </StyledProjectSection>
    );
};

export default ProjectSection;