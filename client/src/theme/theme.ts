import {createTheme} from '@mui/material/styles';

class Theme {
    colors = {
        blue: "#6246EA",
        black: "#2B2C34",
        grey: "#C0C0C0",
        light_gray1: "#EFF0F3",
        light_gray2: "#E4E5E9",
        dark_gray: "#9A9494",
    }

    ui = {
        background: {
            primary_background: "#FFFFFE",
            secondary_background: "#6246EA",
            light_gray: this.colors.light_gray1,
            light_gray2: this.colors.light_gray2
        },

        heading: {
            color: this.colors.black,
            fontSize: "64px",
            fontWeight: "bold"
        },

        sub_heading1: {
            color: this.colors.black,
            fontSize: "24px",
            fontWeight: "bold"
        },
        sub_heading2: {
            color: this.colors.black,
            fontSize: "20px",
            fontWeight: "bold"
        },
        paragraph1: {
            color: this.colors.dark_gray,
            fontSize: "20px",
            fontWeight: "regular"
        },
        paragraph2: {
            color: this.colors.black,
            fontSize: "18px",
            fontWeight: "regular"
        },
        paragraph3: {
            color: this.colors.black,
            fontSize: "16px",
            fontWeight: "600"
        },
        paragraph4: {
            color: this.colors.black,
            fontSize: "14px",
            fontWeight: "regular"
        },
    }
    get userInterface() {
        return this.ui;
    }

}

const theme = createTheme({...new Theme().userInterface})

export default theme;