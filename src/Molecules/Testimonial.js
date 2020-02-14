import React from 'react';

import Quote from "../Atoms/Quote";

const Testimonial = ({title, text, name, address}) => (
    <div className="flex justify-center">
        <div>
            <Quote className="text-main-100">"</Quote>
            <p>This is the Testimonials Area</p>
        </div>
    </div>
);

export default Testimonial;