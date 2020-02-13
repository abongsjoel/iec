import React from 'react';

import Hero from '../Organisms/Hero';
import WelcomeMessage from '../Organisms/WelcomeMessage';


import Aux from '../hoc/Auxilary';
import GetInTouch from "../Organisms/GetInTouch";

const Homepage = () => (
    <Aux>
        <Hero />
         <WelcomeMessage />
         <GetInTouch />
        <p>This is the homepage</p>
    </Aux>
);


export default Homepage;