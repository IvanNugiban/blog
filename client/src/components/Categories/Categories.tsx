import React, {useEffect} from 'react';
import TitleAndLink from "../../ui/TitleAndLink/TitleAndLink";
import Container from "../../ui/Container/Container";
import styled from "@emotion/styled";
import {useTheme} from "@mui/material/styles";
import {useTranslation} from "react-i18next";
import CategoriesStore from "../../store/Categories"
import CategoryCard from "../../ui/CategoryCard/CategoryCard";
import ElementWithBackgroundProp from "../../types/ElementWithBackgroundProp";
import {observer} from "mobx-react-lite";
import Loader from "../../ui/Loader/Loader";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`

const StyledCategories = styled.div<ElementWithBackgroundProp>`
  padding: 70px 0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({background}) => background};
`

const CategoryList = styled.ul`
  display: flex;
  gap: 35px;
  overflow-x: auto;

  li {
    padding-bottom: 10px;
  }

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

const Categories = observer(() => {
    const {background} = useTheme();
    const {t} = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        if (CategoriesStore.isLoading) return;
        CategoriesStore.fetchCategories();
    }, [])

    if (CategoriesStore.isLoading) return <Loader/>
    return (
        <StyledCategories id="categories" background={background.light_gray}>
            <Container>
                <Wrapper>
                    <TitleAndLink category={`${t("browse_the_category")}`} linkText={`${t('see_all_categories')}`}
                                  onClick={() => navigate("/articles")}/>
                    <CategoryList>
                        <CategoryCard  chosen={CategoriesStore.chosenCategory === "All categories"} titleText="All"
                                      text={"All categories"}
                                      onClick={(category) => CategoriesStore.setCategory(category)}/>
                        {CategoriesStore.categories.map(category => <CategoryCard key={category.id}
                                                                                  chosen={CategoriesStore.chosenCategory === category.category}
                                                                                  onClick={(category) => CategoriesStore.setCategory(category)}
                                                                                  image={category.image}
                                                                                  text={category.category}/>)}
                    </CategoryList>
                </Wrapper>
            </Container>
        </StyledCategories>
    );
});

export default Categories;