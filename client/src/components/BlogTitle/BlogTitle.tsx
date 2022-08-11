import React from 'react';
import styled from "@emotion/styled";
import {Link, useLocation} from "react-router-dom";


const Title = styled.h2`
  color: #2B2C34;
  font-size: 36px;
  font-weight: 600;
  cursor: pointer;
  &:after {
    content: ".blog";
    color: #6246EA;
    font-size: 0.5em;
  }
`

const BlogTitle = () => {
    const {pathname} = useLocation();

   const url =  pathname.match(/\/[a-z]+/);

    return <Link to={url ? url[0] : ""}><Title>Ivan</Title></Link>
};

export default BlogTitle;