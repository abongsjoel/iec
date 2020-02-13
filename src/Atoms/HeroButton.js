import React from 'react';

const HeroButton = ({text, link}) => {

    const style = "bg-main-100 font-semibold inline-block py-3 px-16 rounded text-xl text-white";

    return (
        <a href={link} type="button" className={style}>{text}</a>
    );
};

export default HeroButton;

