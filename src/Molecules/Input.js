import React from 'react';

import PropTypes from 'prop-types';

import Label from '../Atoms/Label';

function Input({
                   label,
                   instruction,
                   required,
                   register,
                   name,
                   value,
                   style,
                   ...props
               }) {
    return (
        <div className={style}>
            <Label content={label} required={required} />
            <div className="w-full">
                <input
                    className="input focus:outline-none focus:border-main-100 cursor-text"
                    name={name}
                    ref={register}
                    defaultValue={value || ''}
                    {...props}
                />
            </div>
            <span className="text-sm text-red-500 flex">
        {instruction}
      </span>
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    register: PropTypes.func,
    props: PropTypes.object,
    instruction: PropTypes.string,
    required: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.string,
};

export default Input;
