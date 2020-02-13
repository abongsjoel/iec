import React from 'react';

import Hero from '../Organisms/Hero';
import HeroButton from "../Atoms/HeroButton";
// import WelcomeMessage from '../Organisms/WelcomeMessage';


import Aux from '../hoc/Auxilary';

const Homepage = () => (
    <Aux>
        <Hero />
        {/* <WelcomeMessage /> */}
        <p>This is the homepage</p>
        <HeroButton className="bg-main-100 font-semibold inline-block py-3 px-12 rounded text-xl text-white;">I am a Hero Button</HeroButton>
    </Aux>   
);


export default Homepage;