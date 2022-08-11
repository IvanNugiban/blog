import React, {useLayoutEffect} from 'react';
import styled from "@emotion/styled";
import ArticlesAndCategories from "../components/ArticlesAndCategories/ArticlesAndCategories";
import {observer} from "mobx-react-lite";
import FetchedCategories from "../store/Categories";
import FetchedArticles from "../store/Articles";

const Articles = styled.div`
  padding-top: 80px;
`



const ArticlesPage = observer(() => {

    useLayoutEffect(() => {
        FetchedCategories.setLimit(undefined);
        FetchedArticles.setLimit(undefined)
    }, [])

    return (
        <Articles data-testid="articles">
           <ArticlesAndCategories/>
        </Articles>
    );
});

export default ArticlesPage;