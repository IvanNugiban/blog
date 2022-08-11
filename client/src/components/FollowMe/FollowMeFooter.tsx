import React from 'react';
import SubHeading2 from "../../ui/Typography/SubHeading2";
import {instagramLink, twitterLink} from "../../utils/constants";
import Paragraph2 from "../../ui/Typography/Paragraph2";
import {Grid} from "@mui/material";
import IFooterItem from "../../types/FooterTypes";

const FollowMeFooter = ({t, FooterList}: IFooterItem) => {
    return (
        <Grid xs={8} item md={3}>
            <FooterList>
                <li><SubHeading2 textTransform="uppercase">{t("follow_me")}</SubHeading2></li>
                <li><a rel='noreferrer' target="_blank"
                       href={instagramLink}><Paragraph2>Instagram</Paragraph2></a>
                </li>
                <li><a rel='noreferrer' target="_blank"
                       href={twitterLink}><Paragraph2>Twitter</Paragraph2></a></li>
            </FooterList>
        </Grid>
    );
};

export default FollowMeFooter;