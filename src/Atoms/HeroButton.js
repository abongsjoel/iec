import React from 'react';
// import { NavLink } from 'react-router-dom';

const HeroButton = ({text, link}) => {

    const style = "bg-main-100 font-semibold inline-block py-3 px-12 rounded text-xl text-white";
    
    return (
        <a href={link} type="button" className={style}>{text}</a>
    );
}

export default HeroButton;

