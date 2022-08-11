import React, {useEffect} from 'react';
import './App.css';
import RootRouter from "./navigation/RootRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SubscribeSection from "./components/SubscribeSection/SubscribeSection";
import {useLocation} from "react-router-dom";

function App() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [pathname])


    return (
        <div>
            <Header/>
            <RootRouter/>
            <SubscribeSection/>
            <Footer/>
        </div>
    )
}

export default App;
