import React from 'react';
import {Carousel as ResponsiveCarousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

interface IProps {
    images: string[];
}


const Carousel = ({images} : IProps) => {
    return (
        <ResponsiveCarousel  infiniteLoop emulateTouch ariaLabel="My projects" autoPlay>
            {
                images.map((image) => <div  key={image}><img alt="Img" src={image}/></div>)
            }
        </ResponsiveCarousel>
    );
};

export default Carousel;