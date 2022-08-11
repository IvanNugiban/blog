import React, {useLayoutEffect} from 'react';
import styled from "@emotion/styled";
import Welcome from "../components/Welcome/Welcome";
import Button from "../ui/Button/Button";
import {useTranslation} from "react-i18next";
import Container from "../ui/Container/Container";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import FetchedArticles from "../store/Articles";
import FetchedCategories from "../store/Categories"
import ArticlesAndCategories from "../components/ArticlesAndCategories/ArticlesAndCategories";

const Home = styled.div`
  padding: 80px 0 40px 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomePage = observer(() => {
    const {t} = useTranslation();

    useLayoutEffect(() => {
        return () => {
            FetchedCategories.setLimit(undefined);
            FetchedArticles.setLimit(undefined);
        }
    }, [])

    return (
        <Home data-testid="home">
            <Welcome/>
            <ArticlesAndCategories/>
            <Container>
                <ButtonWrapper>
                    {(FetchedArticles.articles.length > 0 && FetchedCategories.categories.length) > 0 && (<Link to='/articles'>
                        <Button>{t("more_articles")}</Button>
                    </Link>)}
                </ButtonWrapper>
            </Container>
        </Home>
    )
});

export default HomePage