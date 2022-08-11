import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import React from 'react';

interface IProps {
    value: string;
    onChange: (e: SelectChangeEvent) => void;
    languages: {
        value: string;
        language: string;
    }[]
    label: string;
}

const LanguageSelector = ({value, onChange, languages, label}: IProps) => {
    return (
        <FormControl variant="standard">
            <InputLabel>{label}</InputLabel>
            <Select
                value={value}
                onChange={onChange}
            >
                {languages.map(language => <MenuItem key={language.value} value={language.value}>{language.language}</MenuItem>)}
            </Select>
        </FormControl>
    );
};

export default LanguageSelector;