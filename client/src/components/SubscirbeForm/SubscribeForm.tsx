import React, {useCallback, useEffect, useState} from 'react';
import {Alert, AlertColor, Box, TextField} from "@mui/material";
import Button from "../../ui/Button/Button";
import styled from "@emotion/styled";
import {useTheme} from "@mui/material/styles";
import {useTranslation} from "react-i18next";
import useInput from "../../hooks/useInput";
import axios from "axios";
import {baseUrl, emailRegExp} from "../../utils/constants";


const Wrapper = styled.div`
  width: 100%;
  max-width: 445px;
`

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`

const EmailInput = styled(TextField)`
  width: 100%;
  border-radius: 8px;
`

const SubscribeForm = () => {
    const {background} = useTheme();
    const {t, i18n} = useTranslation();
    const [emailState, setEmailState] = useState<undefined | {
        severity: AlertColor,
        text: string;
    }>(undefined)

    useEffect(() => {
        setEmailState(undefined);
    }, [i18n.language])

    const {value, onChange, clear} = useInput("");

    const subscribe = useCallback(async () => {

        if (value.length === 0) return setEmailState({
            severity: "warning",
            text: t("please_enter_email")
        });



        if (!emailRegExp.test(value)) return setEmailState({
            severity: "error",
            text: t("email_is_incorrect")
        });

        try {
            await axios.post(`${baseUrl}/api/email/add`, {
                email: value,
                language: i18n.language
            });
            setEmailState({
                severity: "success",
                text: t("thank_you_for_subscription")
            })

            clear();

        } catch (e) {
            if (axios.isAxiosError(e)) {
                setEmailState({
                    severity: "error",
                    text: t("already_subscribed")
                })
            }

            if (e instanceof TypeError) {
                setEmailState({
                    severity: "error",
                    text: "Server error"
                })
            }
        }
    }, [clear, i18n.language, t, value])

    return (
        <StyledBox
            onSubmit={(e) => {
                e.preventDefault();
                subscribe();
            }}
            component="form"
        >
            <Wrapper>
                <EmailInput value={value} onChange={(e) => {
                    setEmailState(undefined);
                    onChange(e);
                }} inputProps={{maxLength: 254}} placeholder={`${t("subscribe_placeholder")}`}
                            style={{background: background.primary_background}}/>
            </Wrapper>
            <Button onClick={() => subscribe()}>
                {t("subscribe_button")}
            </Button>
            {emailState && <Alert sx={{width: "100%"}} onClose={() => setEmailState(undefined)}
                                  severity={emailState.severity}>{emailState.text}</Alert>}
        </StyledBox>
    );
};

export default SubscribeForm;