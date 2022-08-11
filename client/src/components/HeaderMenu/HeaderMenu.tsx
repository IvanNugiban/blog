import React from 'react';
import styled from "@emotion/styled";
import {Link, useLocation} from "react-router-dom";
import SubHeading2 from "../../ui/Typography/SubHeading2";
import LanguageSelector from "../../ui/LanguageSelector/LanguageSelector";
import {useTranslation} from "react-i18next";

interface IProps {
    onClick?: () => void;
}

interface IListItemProps {
    active: boolean;
}

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;

  li:not(:last-child) {
    margin: 0 50px 0 0;
  }
  
  @media screen and (max-width: 800px) {
    flex-direction: column;
    li:not(:last-child) {
      padding: 0 70px;
      margin: 0 0 20px 0;
    }
    li:first-of-type {
      padding-top: 30px;
    }
  }
`

const HeaderListItem = styled.li<IListItemProps>`
  h3 {
    color: ${({active}) => active ? "#FF6464" : "initial"};
    transition: 0.5s;
      &:hover {
        color: #FF6464
      }
  }
`

const HeaderMenu = ({onClick} : IProps) => {
    const {t, i18n} = useTranslation();
    const {pathname} = useLocation();
    return (
        <StyledHeaderMenu>
            <HeaderListItem onClick={onClick}  active={pathname === "/"}><Link data-testid = "toHome"
                to="/" ><SubHeading2>{t("home")}</SubHeading2></Link></HeaderListItem>
            <HeaderListItem onClick={onClick} active={pathname === "/articles"}><Link data-testid = "toArticles" to="/articles"><SubHeading2>{t("articles")}</SubHeading2></Link></HeaderListItem>
            <HeaderListItem onClick={onClick} active={pathname === "/projects"}><Link data-testid = "toProjects" to="/projects"><SubHeading2>{t("projects")}</SubHeading2></Link></HeaderListItem>
            <HeaderListItem onClick={onClick} active={pathname === "/about"}><Link data-testid = "toAbout" to="/about"><SubHeading2>{t("about")}</SubHeading2></Link></HeaderListItem>
            <li><LanguageSelector label={t("language")} value={i18n.language}
                                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                                  languages={[{
                                      language: "Українська",
                                      value: "ua"
                                  }, {
                                      language: "Русский",
                                      value: "ru"
                                  },
                                      {
                                          language: "English",
                                          value: "en"
                                      }
                                  ]}/></li>
        </StyledHeaderMenu>
    );
};

export default HeaderMenu;