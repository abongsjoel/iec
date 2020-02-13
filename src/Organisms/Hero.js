import React from 'react';

import Img from '../Atoms/Img';
import HeroButton from '../Atoms/HeroButton';
import HeroMessage from "../Atoms/HeroMessage";

import HeroImage from '../assets/images/hero-img.jpeg';

// import Aux from '../hoc/Auxilary';

const Hero = () => (
    <div className="relative pb-full sm:pb-2/3 md:pb-1/2 xl:pb-2/5">
        <Img 
            src={HeroImage} 
            alt="International Education Consultancy" 
            styles=" absolute"  
        />
        <div className="absolute flex h-full w-full items-center px-1/10 bg-trans">
            <div>
                <HeroMessage className="pt-2 font-extrabold mb-4">WANT TO STUDY IN <br />CANADA ?</HeroMessage>
                <HeroButton text="Register Now" link="/" />
            </div>
      
        </div>
    </div>
);

export default Hero;