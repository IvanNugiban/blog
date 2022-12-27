import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import {useLocation} from "react-router-dom";
import styled from "@emotion/styled";
import {useTranslation} from "react-i18next";
import {observer} from "mobx-react-lite";
import FetchedCategories from "../../store/Categories"
import Loader from "../../ui/Loader/Loader";
import FooterCategories from "../FooterCategories/FooterCategories";
import AboutMeFooter from "../AboutMeFooter/AboutMeFooter";
import FollowMeFooter from "../FollowMe/FollowMeFooter";
import MadeByFooter from "../MadeByFooter/MadeByFooter";

const StyledFooterInfo = styled(Grid)`
  align-items: baseline;
  border-bottom: 1px solid #C0C0C0;
  padding-bottom: 50px;
  @media screen and (max-width: 899px) {
    text-align: center;
    justify-content: center;
    padding-bottom: 20px;
  }
`

const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: 0.5s;

  p:hover {
    color: #FF6464;
    transition: 0.5s;
  }
`


const FooterInfo = observer(() => {
    const {t} = useTranslation();
    const {pathname} = useLocation();

    useEffect(() => {
        if (pathname === "/" || pathname === "/articles") return;
        FetchedCategories.fetchCategories(5);
    }, [pathname])

    if (FetchedCategories.isLoading) return <Loader/>

    return (
        <StyledFooterInfo container spacing={2}>
            <MadeByFooter t={t} FooterList={FooterList}/>
            <FooterCategories pathname={pathname} t={t} FooterList={FooterList}/>
            <AboutMeFooter pathname={pathname} t={t} FooterList={FooterList}/>
            <FollowMeFooter t={t} FooterList={FooterList}/>
        </StyledFooterInfo>
    );
});

export default FooterInfo;