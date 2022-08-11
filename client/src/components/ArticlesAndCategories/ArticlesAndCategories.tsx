import React from 'react';
import Categories from "../Categories/Categories";
import ArticlesList from "../ArticlesList/ArticlesList";
import {observer} from "mobx-react-lite";
import FetchedArticles from "../../store/Articles";
import FetchedCategories from "../../store/Categories";
import NoData from "../../ui/NoData/NoData";



const ArticlesAndCategories = observer(() => {


    if (!FetchedArticles.isLoading && (FetchedArticles.error || !Array.isArray(FetchedArticles.articles))) return <NoData/>;
    if (!FetchedCategories.isLoading && (FetchedCategories.error || !Array.isArray(FetchedCategories.categories))) return <NoData/>;

    return (
        <>
            <Categories/>
            <ArticlesList />
        </>
    )
});

export default ArticlesAndCategories;