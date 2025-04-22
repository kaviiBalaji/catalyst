'use client';

import React from "react";
import "./PromotionBanner.css"

export default function PromotionBanner() {
    let promotions: string[] = [
        'Buy more, save more—don`t miss out on our tiered discounts!',
        'Big savings just for you! Use code [Pineapple 2KG] at checkout and save!'
    ];

    return (
        <div className="promotion-banner">
            <div className="promotion-slider">
                {promotions.map((value, index) => (
                    <div key={index} className="promotion-text">
                        <span>{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
