import React from 'react';

import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker/es';
import { RHFInput } from 'react-hook-form-input';
import Img from '../../Atoms/Img2';
// import calendarIcon from '../../../images/calendar.svg';
import Label from '../../Atoms/Label';

function CustomDatePicker({
                              label,
                              instruction,
                              value,
                              required,
                              name,
                              register,
                              setValue,
                              errors,
                              ...props
                          }) {
    return (
        <div className="mx-4 xl:mx-8">
            <Label content={label} required={required} />
            <div className="w-full">
                <div className="relative">
                    <RHFInput
                        as={
                            <DatePicker
                                value={value}
                                name={name}
                                className="input block appearance-none"
                            />
                        }
                        name={name}
                        value={value}
                        register={register}
                        setValue={setValue}
                        {...props}
                    />
                    <div className="pointer-events-none mt-1 absolute inset-y-0 right-0 flex items-center px-3 rounded-lg bg-gray-thick-1">
                        {/*<Img src={calendarIcon} alt="" className="" />*/}
                    </div>
                </div>
            </div>
            <span className="text-xt xl:text-ty text-red-sec flex">
        {instruction}
      </span>
        </div>
    );
}

CustomDatePicker.propTypes = {
    label: PropTypes.string,
    instruction: PropTypes.string,
    required: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.string,
    props: PropTypes.object,
    setValue: PropTypes.func,
    register: PropTypes.func,
    errors: PropTypes.object,
};

export default CustomDatePicker;
