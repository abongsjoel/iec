import React from 'react';
import PropTypes from 'prop-types';

function Label({ content, required, instruction }) {
    return (
        <label className="text-xs sm:text-sm text-nuetral-100 ">
            {content}
            {required ? <span className="text-red-700 px-1">*</span> : null}
            <span className="text-sm text-red-700 pl-5">
                {instruction}
            </span>
        </label>
    );
}

Label.propTypes = {
    content: PropTypes.string,
    required: PropTypes.bool,
};

export default Label;
