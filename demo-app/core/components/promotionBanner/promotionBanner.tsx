'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PromotionBanner() {
    let promotions: string[] = [
        'Buy more, save more—don`t miss out on our tiered discounts!',
        'Big savings just for you! Use code [Pineapple 2KG] at checkout and save!'
    ];
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };
    
    return (
        <div className="promotion-banner">
            <Slider {...settings}>
                {promotions.map((value, index) => (
                    <div key={index}>
                        <span>{value}</span>
                    </div>
                ))}
            </Slider>
        </div>
    );
}