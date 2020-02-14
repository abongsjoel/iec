import React from 'react';

import Testimonial from "../Molecules/Testimonial";
import Img from "../Atoms/Img2";

import quoteIcon from "../assets/icons/quote.svg";
import rightArrow from "../assets/icons/right_arrow.svg";

const Testimonials = () => (
    <div className="px-1/20 pt-10">

        <div className="flex justify-between items-center">
            <div className="">
                <Img className="opacity-75 transform rotate-180" src={rightArrow} alt="Next" />
            </div>
            <div>
                <div className="flex justify-center">
                    <Img className="w-10 text-main-100 " src={quoteIcon} alt="" />
                </div>
                <h3 className="font-bold text-3xl text-center">Testimonials</h3>
                <Testimonial
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit lacus, bibendum in accumsan sed,
                    dignissim at massa. Cras euismod metus sit amet metus mollis sagittis."
                    name="- Thierry Joel"
                />
                <div className="flex justify-center mt-2 mb-16">
                    <div className="w-2 h-2 rounded-full bg-sec-100 mx-1"></div>
                    <div className="w-2 h-2 rounded-full bg-nuetral-300 mx-1"></div>
                    <div className="w-2 h-2 rounded-full bg-nuetral-300 mx-1"></div>
                </div>
            </div>
            <div className="">
                <Img className="opacity-50" src={rightArrow} alt="Next" />
            </div>
        </div>
    </div>
);

export default Testimonials;