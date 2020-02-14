import React from 'react';

import Testimonial from "../Molecules/Testimonial";
import downloadIcon from "../assets/icons/download.svg";
import Img from "../Atoms/Img2";

import quoteIcon from "../assets/icons/quote.svg"
import SectionHeading from "../Atoms/SectionHeading";

const Testimonials = () => (
    <div className="px-1/10 pt-20">
        <div className="flex justify-center">
            <Img className="w-10 text-main-100 " src={quoteIcon} alt="" />
        </div>
            <h3 className="font-bold text-3xl text-center">Testimonials</h3>
            <Testimonial
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit lacus, bibendum in accumsan sed,
                dignissim at massa. Cras euismod metus sit amet metus mollis sagittis."
                name="Thierry Joel"
            />

    </div>
);

export default Testimonials;