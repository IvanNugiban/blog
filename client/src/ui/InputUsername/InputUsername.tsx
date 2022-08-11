import React, {useState} from 'react';
import {
    Alert,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material";
import {useTranslation} from "react-i18next";
import useInput from "../../hooks/useInput";

interface IProps {
    isOpen: boolean;
    closeWindow: () => void;
    onSubmit: (username: string) => void;
}


const InputUsername = ({isOpen, closeWindow, onSubmit}: IProps) => {

    const {t} = useTranslation();
    const {value, onChange} = useInput("")
    const [error, setError] = useState<string | boolean>(false);
    const [isSuccess, setSuccessState] = useState<boolean>(false);

    function handleSubmit() {
        if (value.length > 16) return setError(t("maximum_length_username"));
        else if (value.length < 4) return setError(t("minimum_length_username"));
        setSuccessState(true);
        setTimeout(() => {
            onSubmit(value);
            document.getElementById('articleImage')?.scrollIntoView(true);
            closeWindow();
        }, 1000)
    }

    return (
        <Dialog onKeyDown={(e) => e.key === "Enter" && handleSubmit()} open={isOpen} onClose={closeWindow}>
            <DialogTitle>{t("enter_username")}</DialogTitle>
            <DialogContent>
                <DialogContentText>{t("enter_username_paragraph")}</DialogContentText>
                <TextField
                    error={Boolean(error)}
                    helperText={error}
                    value={value}
                    onChange={(e) => {
                        setError(false);
                        onChange(e)
                    }}
                    autoFocus
                    margin="dense"
                    id="name"
                    label={t("enter_username")}
                    type="text"
                    fullWidth
                    variant="standard"
                />
                {isSuccess && <Alert severity="success">{t("commentary_sent")}</Alert>}
            </DialogContent>
            <DialogActions>
                <Button onClick={closeWindow}>{t("cancel")}</Button>
                <Button onClick={handleSubmit}>{t("send")}</Button>
            </DialogActions>
        </Dialog>
    )
};

export default InputUsername;