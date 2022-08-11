import React from 'react';
import styled from "@emotion/styled";
import SubHeading1 from "../Typography/SubHeading1";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import {useTheme} from "@mui/material/styles";
import SubHeading2 from "../Typography/SubHeading2";
import ITitleAndLinkProps from "../../types/TitleAndLinkProps";
import {useLocation} from "react-router-dom";


interface IBlockProps {
    color: string;
}

const StyledTitleAndLink = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`


const LinkBlock = styled.div<IBlockProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    * {
      color: ${({color}) => color};
      transition: 1s;
    }
  }
`

const TitleBlock = styled(LinkBlock)`
  @media screen and (max-width: 750px) {
    display: none;
  }
`

const TitleAndLink = ({category, linkText, onClick}: ITitleAndLinkProps) => {
    const {background} = useTheme();
    const {pathname} = useLocation();

    return (
        <StyledTitleAndLink>
            <TitleBlock data-testid="categoryName" onClick={onClick} color={background.secondary_background}>
                <SubHeading1>{category}</SubHeading1>
                <RemoveOutlinedIcon/>
            </TitleBlock>
            {pathname !== "/articles" && <LinkBlock color={background.secondary_background} onClick={onClick}>
                <SubHeading2>{linkText}</SubHeading2>
                <ChevronRightOutlinedIcon/>
            </LinkBlock>}
        </StyledTitleAndLink>
    );
};

export default TitleAndLink;