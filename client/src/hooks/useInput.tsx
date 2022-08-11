import React, {useState} from "react";

const useInput = (initialValue : string) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };

    const clear = () => {
        setValue("");
    }

    return {
        value,
        onChange: handleChange,
        clear
    };
};

export default useInput;