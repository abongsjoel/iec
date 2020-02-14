import React from 'react';
import Quote from "../Atoms/Quote";


const Testimonial = ({text, name, address}) => (
    <div className="flex justify-center">
        <div className="w-3/4 pt-4">
            <Quote>{text}</Quote>
            <p className="text-main-100 text-center pt-4"> {name}</p>
        </div>
    </div>
);

export default Testimonial;