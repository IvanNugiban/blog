import React from 'react';
import noDataImage from "../../assets/images/noData.png"
import Container from "../Container/Container";

const NoData = () => {
    return (
        <Container>
            <img data-testid="noData" alt="No data" src={noDataImage}/>
        </Container>
    )
};

export default NoData;