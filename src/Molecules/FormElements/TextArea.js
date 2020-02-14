import React from 'react';

import PropTypes from 'prop-types';

import Label from '../../Atoms/Label';

function TextArea({
  label,
  instruction,
  required,
  register,
  name,
  value,
  ...props
}) {

  return (
    <div>
      <Label content={label} required={required} />
      <div className="w-full">
        <textarea
          rows="4"
          className="input focus:border-blue-sky cursor-text"
          name={name}
          ref={register}
          defaultValue={value}
          {...props}
        >
        </textarea>
      </div>
      <span className="text-xt xl:text-ty text-red-sec flex">
        {instruction}
      </span>
    </div>
  );
}

TextArea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  instruction: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.bool,
};

export default TextArea;
