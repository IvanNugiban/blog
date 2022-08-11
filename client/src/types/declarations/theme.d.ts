import {Theme, ThemeOptions} from "@mui/material";

export interface IElementParams {
    color: string,
    fontSize: string,
    fontWeight: string
}

interface IElementParamsOptional {
    color?: string,
    fontSize?: string,
    fontWeight?: string
}


declare module '@mui/material/styles' {

    interface CustomTheme extends Theme {
        background: {
            primary_background: string,
            secondary_background: string,
            light_gray: string;
            light_gray2: string;
        };
        heading: IElementParams;
        sub_heading1: IElementParams;
        sub_heading2: IElementParams;
        paragraph1: IElementParams;
        paragraph2: IElementParams;
        paragraph3: IElementParams;
        paragraph4: IElementParams;
    }

    interface CustomThemeOptions extends ThemeOptions {
        background?: {
            primary_background?: string,
            secondary_background?: string
            light_gray?: string;
            light_gray2?: string;
        };
        heading?: IElementParams;
        sub_heading1?: IElementParamsOptional;
        sub_heading2?: IElementParamsOptional;
        paragraph1?: IElementParamsOptional;
        paragraph2?: IElementParamsOptional;
        paragraph3?: IElementParamsOptional;
        paragraph4?: IElementParamsOptional;
    }

    export function createTheme(options?: CustomThemeOptions): CustomTheme;
    export function useTheme() : CustomTheme
}