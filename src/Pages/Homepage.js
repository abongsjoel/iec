import React from 'react';

import Hero from '../Organisms/Hero';
// import WelcomeMessage from '../Organisms/WelcomeMessage';


import Aux from '../hoc/Auxilary';

const Homepage = () => (
    <Aux>
        <Hero />
        {/* <WelcomeMessage /> */}
        <p>This is the homepage</p>
    </Aux>   
);


export default Homepage;