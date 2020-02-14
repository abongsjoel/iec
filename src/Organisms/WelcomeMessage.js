import React from 'react';

import Message from '../Molecules/Message';
import WelcomeMessageContent from '../Molecules/Specific/WelcomeMessageContent';

import welcomeImage from '../assets/images/welcome.jpeg';

const WelcomeMessage = () => (
    <div className="px-1/10 pt-5 sm:pt-20">
        <Message
            headingpart1="Our Mission "
            content={<WelcomeMessageContent />}
            imgSrc={welcomeImage}
            imgAlt="Welcome to IEC"
        />
    </div>
);

export default WelcomeMessage;