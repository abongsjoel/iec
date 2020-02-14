import React from 'react';

import PropTypes from 'prop-types';

import Img from '../../Atoms/Img2';
import downloadIcon from '../../assets/icons/download.svg';
import Label from '../../Atoms/Label';

function File({
                  label,
                  register,
                  name,
                  instruction,
                  required,
                  style,
                  ...props
              }) {
    return (
        <div className={style}>
            <Label content={label} required={required} />
            <div className="w-full cursor-pointer">
                <div className="relative cursor-pointer">
                    <div className="input">
                        {/*<div className="cursor-pointer absolute inset-0 flex items-center justify-center pr-12 text-sm text-gray-thick-1 ">*/}
                        {/*  Upload*/}
                        {/*</div>*/}
                        <input
                            ref={register}
                            name={name}
                            className="block appearance-none cursor-pointer "
                            type="file"
                            {...props}
                        />
                    </div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 rounded-lg bg-nuetral-300">
                        <Img src={downloadIcon} alt="" />
                    </div>
                </div>
            </div>
            <span className="text-xt xl:text-ty text-red-sec flex">
        {instruction}
      </span>
        </div>
    );
}

File.propTypes = {
    label: PropTypes.string,
    instruction: PropTypes.string,
    style: PropTypes.string,
    required: PropTypes.bool,
    genStyle: PropTypes.string,
};

export default File;
