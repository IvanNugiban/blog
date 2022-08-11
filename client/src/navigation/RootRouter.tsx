import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Backdrop, CircularProgress} from "@mui/material";

const HomePage = React.lazy(() => import("../pages/HomePage"))
const NotFoundPage = React.lazy(() => import("../pages/NotFoundPage"));
const AboutMePage = React.lazy(() => import("../pages/AboutMePage"));
const ArticlesPage = React.lazy(() => import("../pages/ArticlesPage"));
const ArticlePage = React.lazy(() => import("../pages/ArticlePage"))
const ProjectsPage = React.lazy(() => import("../pages/ProjectsPage"))
const UnsubscribePage = React.lazy(() => import("../pages/UnsubscribePage"))

const RootRouter = () => {
    return (
        <Routes>
            <Route path="" element={<React.Suspense fallback={<Backdrop  sx={{ backgroundColor: "rgba(0,0,0,100)" ,color: '#FFFFFF', zIndex: (theme) =>  theme.zIndex.drawer + 1}} open><CircularProgress color="inherit" /></Backdrop>}><HomePage/></React.Suspense>}/>
            <Route path="about" element={<React.Suspense fallback={<Backdrop  sx={{ backgroundColor: "rgba(0,0,0,100)" ,color: '#FFFFFF', zIndex: (theme) =>  theme.zIndex.drawer + 1}} open><CircularProgress color="inherit" /></Backdrop>}><AboutMePage/></React.Suspense>}/>
            <Route path="articles" element={<React.Suspense fallback={<Backdrop  sx={{ backgroundColor: "rgba(0,0,0,100)" ,color: '#FFFFFF', zIndex: (theme) =>  theme.zIndex.drawer + 1}} open><CircularProgress color="inherit" /></Backdrop>}><ArticlesPage/></React.Suspense>}/>
            <Route path="articles:id" element={<React.Suspense fallback={<Backdrop  sx={{ backgroundColor: "rgba(0,0,0,100)" ,color: '#FFFFFF', zIndex: (theme) =>  theme.zIndex.drawer + 1}} open><CircularProgress color="inherit" /></Backdrop>}><ArticlePage/></React.Suspense>}/>
            <Route path="projects" element={<React.Suspense fallback={<Backdrop  sx={{ backgroundColor: "rgba(0,0,0,100)" ,color: '#FFFFFF', zIndex: (theme) =>  theme.zIndex.drawer + 1}} open><CircularProgress color="inherit" /></Backdrop>}><ProjectsPage/></React.Suspense>}/>
            <Route path="unsubscribe:emailId" element={<React.Suspense fallback={<Backdrop  sx={{ backgroundColor: "rgba(0,0,0,100)" ,color: '#FFFFFF', zIndex: (theme) =>  theme.zIndex.drawer + 1}} open><CircularProgress color="inherit" /></Backdrop>}><UnsubscribePage/></React.Suspense>}/>
            <Route path="*" element={<React.Suspense fallback={<Backdrop  sx={{ backgroundColor: "rgba(0,0,0,100)" ,color: '#FFFFFF', zIndex: (theme) =>  theme.zIndex.drawer + 1}} open><CircularProgress color="inherit" /></Backdrop>}><NotFoundPage/></React.Suspense>}/>
        </Routes>
    );
};

export default RootRouter;