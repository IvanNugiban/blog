import React from 'react';
import styled from "@emotion/styled";
import ArticlesAndCategories from "../components/ArticlesAndCategories/ArticlesAndCategories";
import {observer} from "mobx-react-lite";

const Articles = styled.div`
  padding-top: 80px;
`



const ArticlesPage = observer(() => {

    return (
        <Articles data-testid="articles">
           <ArticlesAndCategories/>
        </Articles>
    );
});

export default ArticlesPage;