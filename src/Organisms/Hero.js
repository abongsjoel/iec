import React from 'react';

import Img from '../Atoms/Img'

import HeroImage from '../assets/images/hero-img.jpeg';
// import HeroLogo from '../assets/logo/hero-logo.png';
// import Aux from '../hoc/Auxilary';

const Hero = () => (
    <div className="relative pb-full sm:pb-2/3 md:pb-1/2 xl:pb-2/5">
        <Img 
            src={HeroImage} 
            alt="International Education Consultancy" 
            styles=" absolute"  
        />
        <div className="absolute flex h-full w-full items-center px-1/10 bg-trans">
            <p className="pt-2 hero-font font-bold ">
                WANT TO STUDY IN <br />CANADA ?
            </p>
      
        </div>
    </div>
);

export default Hero;