import React from 'react';
import {Grid} from "@mui/material";
import SubHeading2 from "../../ui/Typography/SubHeading2";
import {Link} from "react-router-dom";
import Paragraph2 from "../../ui/Typography/Paragraph2";
import IFooterItem from "../../types/FooterTypes";

const AboutMeFooter = ({pathname, t, FooterList} : IFooterItem) => {
    return (
        <Grid xs={8} item md={3}>
            <FooterList>
                <li><SubHeading2 textTransform="uppercase">{t("about")}</SubHeading2></li>
                <li><Link data-testid="toAboutFooter" to='/about'><Paragraph2
                    active={pathname === "/about"}>{t("about")}</Paragraph2></Link></li>
                <li><Link data-testid="toProjectsFooter"
                          to='/projects'><Paragraph2 active={pathname === "/projects"}>{t("projects")}</Paragraph2></Link>
                </li>
                <li data-testid="toArticlesFooter"><Link
                    to='/articles'><Paragraph2 active={pathname === "/articles"}>{t("articles")}</Paragraph2></Link>
                </li>
            </FooterList>
        </Grid>
    );
};

export default AboutMeFooter;