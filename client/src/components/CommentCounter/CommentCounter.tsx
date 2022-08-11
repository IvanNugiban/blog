import React from 'react';
import styled from "@emotion/styled";
import SubHeading2 from "../../ui/Typography/SubHeading2";

interface IProps {
    length: number;
    language: string;
}

const Wrapper = styled.div`
 margin: 30px 0;
`

const CommentCounter = ({length, language}: IProps) => {
    let commentaries;

    if (language === "ua" && (length === 0 || length > 4)) commentaries = "коментарів"
    else if (language === "ua" && length === 1) commentaries = "коментар";
    else if (language === "ua") commentaries = "коментаря"

    if (language === "en" && length === 1) commentaries = "commentary";
    else if (language === "en") commentaries = "commentaries"

    if (language === "ru" && (length === 0 || length > 4)) commentaries = "комментариев"
    else if (language === "ru" && length === 1) commentaries = "коментарий";
    else if (language === "ru") commentaries = "коментария"

    return (
        <Wrapper>
        <SubHeading2>{length} {commentaries}</SubHeading2>
        </Wrapper>
    );
};

export default CommentCounter;