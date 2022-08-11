import React from 'react';
import styled from "@emotion/styled";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {ICommentary} from "../../types/ArticlesTypes";
import dayjs from "dayjs";


const StyledCommentary = styled(ListItem)`
  & {
    padding: 0;
    margin-top: 30px;
   overflow-wrap: break-word;
  }
`

const Commentary = ({creator, commentary, dateOfCreation}: ICommentary) => {
    return (
        <StyledCommentary>
            <ListItemAvatar sx={{marginRight: 2}}>
                <Avatar sx={{height: 55, width: 55}} src="" variant="square"/>
            </ListItemAvatar>
            <ListItemText primary={`${creator} ${dayjs(dateOfCreation).format(`MM.DD, YYYY `)}`} secondary={commentary}/>
        </StyledCommentary>
    );
};

export default Commentary;