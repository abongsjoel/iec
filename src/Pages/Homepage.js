import React from 'react';

import Hero from '../Organisms/Hero';
import WelcomeMessage from '../Organisms/WelcomeMessage';


import Aux from '../hoc/Auxilary';
import GetInTouch from "../Organisms/GetInTouch";
import Testimonials from "../Organisms/Testimonial";

const Homepage = () => (
    <Aux>
        <Hero />
         <WelcomeMessage />
         <GetInTouch />
         <Testimonials />
    </Aux>
);


export default Homepage;