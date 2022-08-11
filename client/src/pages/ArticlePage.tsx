import React, {useEffect, useRef, useState} from 'react';
import styled from "@emotion/styled";
import Container from "../ui/Container/Container";
import Heading from "../ui/Typography/Heading";
import {observer} from "mobx-react-lite";
import {useNavigate, useParams} from "react-router-dom";
import FetchedArticles from "../store/Articles"
import {useTranslation} from "react-i18next";
import Loader from "../ui/Loader/Loader";
import NoData from "../ui/NoData/NoData";
import Paragraph3 from "../ui/Typography/Paragraph3";
import dayjs from "dayjs";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import Paragraph2 from "../ui/Typography/Paragraph2";
import LeaveComment from "../ui/LeaveComment/LeaveComment";
import InputUsername from "../ui/InputUsername/InputUsername";
import {List} from "@mui/material";
import Commentary from "../ui/Commentary/Commentary";
import CommentCounter from "../components/CommentCounter/CommentCounter";

const Article = styled.article`
  padding: 120px 0 40px 0;
`

const ArticleImage = styled.img`
  margin: 30px 0 50px 0;
  object-fit: contain;
  width: 900px;
  border-radius: 12.5px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ArticleInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  p:first-of-type {
    margin-right: 10px;
  }
`


const ArticlePage = observer(() => {

    const {t, i18n} = useTranslation();
    const navigate = useNavigate();
    const {id} = useParams();
    const [isModalOpened, setModalState] = useState<boolean>(false);
    const commentary = useRef<string>("");
    const chosenArticle = FetchedArticles.chosenArticle;

    useEffect(() => {
        FetchedArticles.getChosenArticle(id!.slice(1), i18n.language)
    }, [i18n.language, id])

    if (FetchedArticles.isLoading) return <Loader/>;
    if (FetchedArticles.error) navigate("/notFound");

    return (
        <Article>
            <Container>
                <Wrapper>
                    <Heading>{chosenArticle.title}</Heading>
                    <ArticleInfo>
                        <Paragraph3>{t("ivan")}</Paragraph3>
                        <QueryBuilderIcon fontSize="small"/>
                        <Paragraph3>{dayjs(chosenArticle.createdAt).format(`MM.DD, YYYY `)}</Paragraph3>
                    </ArticleInfo>
                    <ArticleImage id="articleImage" alt="Article image" src={chosenArticle.image}/>
                </Wrapper>
                <Paragraph2>{chosenArticle.paragraph}</Paragraph2>
                <LeaveComment onSubmit={(comment) => {
                    commentary.current = comment;
                    setModalState(true)
                }
                } avatar=""/>

                <InputUsername isOpen={isModalOpened} closeWindow={() => setModalState(false)} onSubmit={(username) => FetchedArticles.addCommentary({
                    commentary: commentary.current,
                    creator: username,
                    dateOfCreation: new Date().toString()
                }, id!.slice(1))}/>

                <CommentCounter length={chosenArticle.commentaries?.length} language={i18n.language}/>

                {chosenArticle.commentaries?.map(commentary => <List key={commentary.dateOfCreation}><Commentary  commentary={commentary.commentary} creator={commentary.creator} dateOfCreation={commentary.dateOfCreation}/></List>)}
            </Container>
        </Article>
    );
});

export default ArticlePage;