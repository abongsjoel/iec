import React from 'react';

import ContactForm from './ContactForm/ContactForm';
import SectionHeading from "../Atoms/SectionHeading";

const GetInTouch = () => (
    <div className="px-1/10 bg-nuetral-200 py-1/20">
        <SectionHeading>Get In Touch</SectionHeading>
        <ContactForm />
    </div>
);

export default GetInTouch;