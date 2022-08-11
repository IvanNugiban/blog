import React from 'react';
import styled from "@emotion/styled";
import {useTheme} from "@mui/material/styles";
import SubHeading1 from "../Typography/SubHeading1";

interface IProps {
    image?: string;
    text: string;
    onClick: (category: string) => void;
    chosen: boolean;
    titleText?: string;
}

interface IStyledCategoryCardProps {
    mainBackground: string;
    secondaryBackground: string;
    activeBackground: string
    chosen: boolean;
}

const Icon = styled.img`
  height: 60px;
  width: 60px;
  object-fit: contain;
  margin-bottom: 30px;
`

const StyledCategoryCard = styled.article<IStyledCategoryCardProps>`
  min-width: 220px;
  height: 280px;
  padding: 65px 0 0 30px;
  margin-bottom: 10px;
  background-color: ${({chosen, mainBackground, secondaryBackground}) => chosen ? secondaryBackground : mainBackground};
  transition: 0.5s;
  border-radius: 8px;
  filter: drop-shadow(4px 6px 13px rgba(113, 113, 113, 0.25));
  cursor: pointer;
  
  h2 {
    color: ${({chosen}) => chosen ? "white" : "inherit"};
  }

  &:hover {
    transition: 1s all;
    background-color: ${({activeBackground}) => activeBackground};
    h2{
      color: white;
    }
  }
`

const Title = styled.h2`
    font-size: 45px;
`


const CategoryCard = ({image, text, onClick, chosen, titleText}: IProps) => {
    const {background} = useTheme();
    return (
        <StyledCategoryCard chosen={chosen} data-testid="categoryCard" onClick={() => onClick(text)}
                            mainBackground={background.primary_background}
                            secondaryBackground={background.secondary_background}
                            activeBackground={background.secondary_background}>
            {image ? <Icon src={image}/> : <Title>{titleText}</Title>}
            <SubHeading1>{text}</SubHeading1>
        </StyledCategoryCard>
    );
};

export default CategoryCard;