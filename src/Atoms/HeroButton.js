import React from 'react';

const HeroButton = ({text, link}) => {

    const style = "bg-main-100 font-semibold inline-block py-2 px-8 text-sm sm:px-12 sm:text-lg lg:py-3 lg:px-16 lg:text-xl rounded text-white";

    return (
        <a href={link} type="button" className={style}>{text}</a>
    );
};

export default HeroButton;

