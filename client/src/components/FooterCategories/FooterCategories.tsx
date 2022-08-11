import React from 'react';
import SubHeading2 from "../../ui/Typography/SubHeading2";
import FetchedCategories from "../../store/Categories";
import {Link} from "react-router-dom";
import Paragraph2 from "../../ui/Typography/Paragraph2";
import {Grid} from "@mui/material";
import {observer} from "mobx-react-lite";
import IFooterItem from "../../types/FooterTypes";


const FooterCategories = observer(({pathname, t, FooterList} : IFooterItem) => {
    return (
        <Grid xs={8} item md={3}>
            <FooterList>
                <li><SubHeading2 textTransform="uppercase">{t("categories")}</SubHeading2></li>
                {FetchedCategories.categories.slice(0, 5).map((category) => <li key={category.id}><Link
                    onClick={() => {
                        FetchedCategories.setCategory(category.category);
                        if (pathname === "/articles") window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        })
                    }}
                    to='articles'><Paragraph2
                    active={FetchedCategories.chosenCategory === category.category}>{category.category}</Paragraph2></Link>
                </li>)}
                <li><Link to='articles'><Paragraph2>{t("more_categories")}</Paragraph2></Link></li>
            </FooterList>
        </Grid>
    );
});

export default FooterCategories;