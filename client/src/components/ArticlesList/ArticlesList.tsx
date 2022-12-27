import React, {useEffect} from 'react';
import styled from "@emotion/styled";
import ArticlesSection from "../ArticlesSection/ArticlesSection";
import Container from "../../ui/Container/Container";
import {useTranslation} from "react-i18next";
import Articles from "../../store/Articles";
import {observer} from "mobx-react-lite";
import Loader from "../../ui/Loader/Loader";
import {useLocation} from 'react-router-dom';

const StyledArticlesList = styled.div`
  padding-top: 48px;
`

const ArticlesList = observer(() => {
    const {t, i18n} = useTranslation();
    const {pathname} = useLocation();

    useEffect(() => {
        if (Articles.isLoading) return;
        Articles.fetchArticles(i18n.language, pathname === "/articles" ? undefined : 5);
    }, [i18n.language, pathname])

    if (Articles.isLoading) return <Loader/>


    return (
        <StyledArticlesList>
            <Container>
                <ul>
                    {Articles.filteredArticles.map((article, index) => <li key={index}><ArticlesSection
                        articles={article}
                        linkText={`${t("view_all")}`}/>
                    </li>)}
                </ul>
            </Container>
        </StyledArticlesList>
    );
});

export default ArticlesList;