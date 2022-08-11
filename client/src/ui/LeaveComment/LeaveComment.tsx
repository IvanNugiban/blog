import React, {useState} from 'react';
import {Avatar, Box, TextField} from "@mui/material";
import styled from "@emotion/styled";
import useInput from "../../hooks/useInput";
import Button from "../Button/Button";
import {useTranslation} from "react-i18next";

interface IProps {
    avatar: string;
    onSubmit: (comment: string) => void;
}

const LeaveCommentSection = styled(Box)`
  margin-top: 50px;
  display: flex;
  align-items: center;
  gap: 30px;
`

const inputLimit = 3000;

const LeaveComment = ({avatar, onSubmit}: IProps) => {

    const {value, onChange} = useInput("");
    const [error, setError] = useState<boolean>(false);
    const {t} = useTranslation();

    function submitHandler() {
        setError(false);
        if (value.length === 0) return setError(true);
        onSubmit(value);
    }

    return (
        <LeaveCommentSection aria-label="Input your username to leave comment" onSubmit={() => submitHandler()}
                             component="form">
            <Avatar sx={{height: 55, width: 55}} src={avatar} variant="square"/>
            <TextField helperText={error ? t("minimum_length") : false} error={error} id="userInput" value={value} onChange={(e) => {
                if (error) setError(false);
                onChange(e);
            }} inputProps={{maxLength: inputLimit}}
                       placeholder={t("leave_a_comment")} fullWidth multiline/>
            <Button onClick={() => submitHandler()}>{t("send")}</Button>
        </LeaveCommentSection>
    );
};

export default LeaveComment;