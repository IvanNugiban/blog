import {Avatar} from '@mui/material';
import React from 'react';
import styled from "@emotion/styled";
import SubHeading1 from "../Typography/SubHeading1";
import Paragraph3 from "../Typography/Paragraph3";
import Paragraph4 from "../Typography/Paragraph4";
import {useTheme} from "@mui/material/styles";
import ElementWithBackgroundProp from "../../types/ElementWithBackgroundProp";
import dayjs from "dayjs";

interface IProps {
    title: string;
    image: string;
    avatar: string;
    creator: string;
    additionalInfo: string;
    onClick: () => void;
}



const StyledArticleCard = styled.article<ElementWithBackgroundProp>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 10px;
  width: 300px;
  height: 425px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.5s;
  background-color: ${({background}) => background};

  &:hover {
    transition: 0.5s;
    box-shadow: 10px 10px 18px rgba(210, 209, 209, 0.25);
  }
`
const ArticleImage = styled.img`
  border-radius: 12.5px;
`

const ArticleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

const ArticleCard = ({title, image, avatar, creator, additionalInfo, onClick}: IProps) => {
    const {background} = useTheme();
    return (
        <StyledArticleCard data-testid="articleCard" background={background.light_gray} onClick={onClick}>
            <ArticleImage src={image}/>
            <SubHeading1>{title}</SubHeading1>
            <ArticleInfo>
                <Avatar sx={{width: 57, height: 57}} alt="Creator avatar" src={avatar}/>
                <span>
                    <Paragraph3>{creator}</Paragraph3>
                    <Paragraph4>{dayjs(additionalInfo).format(`MM.DD, YYYY `)}</Paragraph4>
                </span>
            </ArticleInfo>
        </StyledArticleCard>
    );
};

export default ArticleCard;