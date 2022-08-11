import {TFunction} from "react-i18next";
import React, {ClassAttributes} from "react";
import { Theme } from "@emotion/react";
import {StyledComponent} from "@emotion/styled";

interface IFooterItem {
    pathname?: string;
    t:  TFunction<"ns1", undefined>;
    FooterList:  StyledComponent<{theme?: Theme, as?: React.ElementType}, ClassAttributes<HTMLUListElement> & React.HTMLAttributes<HTMLUListElement>, {}>
}

export default IFooterItem;