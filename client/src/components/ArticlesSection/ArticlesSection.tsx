import React from 'react';
import styled from "@emotion/styled";
import TitleAndLink from "../../ui/TitleAndLink/TitleAndLink";
import ArticleCard from "../../ui/ArticleCard/ArticleCard";
import {IArticlesResponseData} from "../../types/ArticlesTypes";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import FetchedCategories from "../../store/Categories";


interface IProps  {
    linkText: string;
    articles: IArticlesResponseData;
}

const StyledArticlesSection = styled.section`
  margin-bottom: 80px;
`

const ArticlesList = styled.ul`
  display: flex;
  gap: 30px;
  overflow: auto;
  &::-webkit-scrollbar {
    background: #F2F2F2;
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #A4A4A4;
    border-radius: 10px;
  }
`

const ArticlesSection = ({linkText, articles}: IProps) => {
    const {t} = useTranslation();
    const navigate = useNavigate();

    function redirectWithChosenCategory () {
            FetchedCategories.setCategory(articles.category)
            navigate("/articles")
    }



    return (
        <StyledArticlesSection data-testid="articlesSection">
            <TitleAndLink category={articles.category} linkText={linkText} onClick={redirectWithChosenCategory}/>
            <ArticlesList>
            {articles.articles.map((article) => <li key={article.id} onClick={() => navigate(`/articles:${article.id}`)} ><ArticleCard  title={article.title} image={article.image} avatar="" creator={t("ivan")} additionalInfo={article.createdAt} onClick={() => undefined}></ArticleCard> </li>)}
            </ArticlesList>
        </StyledArticlesSection>
    );
};

export default ArticlesSection;