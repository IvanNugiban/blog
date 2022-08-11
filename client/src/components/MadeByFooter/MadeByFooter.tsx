import React from 'react';
import {Grid} from "@mui/material";
import BlogTitle from "../BlogTitle/BlogTitle";
import Paragraph2 from "../../ui/Typography/Paragraph2";
import {githubLink, instagramLink, twitterLink} from "../../utils/constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import IFooterItem from "../../types/FooterTypes";
import styled from "@emotion/styled";

const FooterIcons = styled.ul`
  display: flex;
  gap: 30px;

  a {
    color: inherit;
  }

  @media screen and (max-width: 899px) {
    justify-content: center;
  }
`

const MadeByFooter = ({t, FooterList} : IFooterItem) => {
    return (
        <Grid item md={3} xs={8}>
            <FooterList>
                <li><BlogTitle/></li>
                <li><Paragraph2>{t("created_by")}</Paragraph2></li>
                <FooterIcons>
                    <li><a data-testid="github" rel='noreferrer' target="_blank"
                           href={githubLink}><GitHubIcon
                        fontSize="large"/></a></li>
                    <li><a data-testid="instagram" rel='noreferrer' target="_blank"
                           href={instagramLink}><InstagramIcon
                        fontSize="large"/></a></li>
                    <li><a data-testid="twitter" rel='noreferrer' target="_blank"
                           href={twitterLink}><TwitterIcon
                        fontSize="large"/></a></li>
                </FooterIcons>
            </FooterList>
        </Grid>
    );
};

export default MadeByFooter;