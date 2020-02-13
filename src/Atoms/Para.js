import React from 'react';

const Para = ({text, styles}) => {
    return (
        <p className={"text-nuetral-100 text-justify " +styles}>{text}</p>
    );
};

export default Para;