/*
 * Lodge a Claim Form
 *
 */

import React, { useEffect, useState } from 'react';

// import PropTypes from 'prop-types';
// import { useForm } from 'react-hook-form';
// import AsyncSelect from 'react-select/async';
// import { withRouter } from 'react-router-dom';
import Input from '../Molecules/Input';
// import CustomSelect from '../../../../../../components/Input/Select';
// import CustomDatePicker from '../../../../../../components/Input/DatePicker';
// import File from '../../../../../../components/Input/File';
// import { getPorts } from '../../../../../../services/PortService';
// import LodgeFooterButton from '../../Footer';
// import { TransportationValidation } from './validation';
// import Label from '../../../../../../components/Label';
// import { addDocument } from '../../../../../../services/documentService';
// import { getVesselByName } from '../../../../../../services/NetworkService';

// const customStyles = {
//     control: () => ({
//         width: '100%',
//         height: 44,
//         border: '2px solid #cecece',
//         boxShadow:
//             '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
//         fontSize: '1rem',
//         marginTop: '0.25rem',
//     }),
// };

// const filterVessel = inputValue =>
//     getVesselByName(inputValue).then(response => response.data);
//
// const loadOptions = (inputValue, callback) => {
//     setTimeout(() => {
//         callback(filterVessel(inputValue));
//     }, 2000);
// };

function ContactForm({ onSubmitEvent, match }) {
//     const { id } = match.params;
//     const [ports, setPorts] = useState([]);
//     const [dateOfLoading, setDateOfLoading] = useState(new Date());
//     const [dateOfLoss, setDateOfLoss] = useState(new Date());
//     const { register, handleSubmit, errors, setValue } = useForm({
//         validationSchema: TransportationValidation,
//         mode: 'onBlur',
//     });
    // useEffect(() => {
    //     getPorts().then(response => {
    //         const result = [];
    //         const dataLength = response.data.length;
    //         if (dataLength > 0) {
    //             response.data.forEach(port =>
    //                 result.push({
    //                     label: `${port.name} (${port.country.name.toUpperCase()})`,
    //                     value: port.name,
    //                 }),
    //             );
    //         }
    //         setPorts(result);
    //     });
    // }, []);
    // const handleInputChange = newValue => newValue.replace(/\W/g, '');
    // const onFileAdded = (e, documentName) => {
    //     const file = e.target.files[0];
    //     addDocument(id, documentName, file).then(response => console.log(response));
    // };

    return (
        <form
            // className="flex flex-col justify-center p-6 pb-0 "
            // onSubmit={handleSubmit(onSubmitEvent)}
        >
            <div className="flex w-full ">
                <div className="w-full">
                    <Input
                        // register={register}
                        label="Transportation Document Number"
                        name="transportationDocumentNumber"
                        instruction={
                            // errors.transportationDocumentNumber &&
                            '8 to 12 Alphanumeric Characters'
                        }
                        required
                    />
                </div>
                <div className="w-full">
                    <Input
                        // register={register}
                        label="Container Number"
                        name="containerNumber"
                        // instruction={errors.containerNumber && 'Format BICU 123456-7'}
                        required
                    />
                </div>
                <div className="w-full">
                    <Input
                        // register={register}
                        label="Voyage Number"
                        name="voyageNumber"
                        // instruction={errors.voyageNumber && 'Enter a valid voyage number'}
                        required
                    />
                </div>
            </div>
            {/*<div className="flex w-full mt-2 ">*/}
            {/*    <div className="w-full">*/}
            {/*        <div className="mx-4 xl:mx-8">*/}
            {/*            <Label content="Vessel Name" required />*/}
            {/*            <AsyncSelect*/}
            {/*                styles={customStyles}*/}
            {/*                onChange={data => setValue('imoNumber', data.value)}*/}
            {/*                components={{ DropdownIndicator: () => null }}*/}
            {/*                loadOptions={loadOptions}*/}
            {/*                onInputChange={handleInputChange}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className="w-full">*/}
            {/*        <Input*/}
            {/*            register={register}*/}
            {/*            label="IMO Number"*/}
            {/*            name="imoNumber"*/}
            {/*            instruction={errors.imoNumber && 'Format IMO 1234567'}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="flex w-full mt-4 ">*/}
            {/*    <CustomSelect*/}
            {/*        register={register}*/}
            {/*        label="Port of Loading"*/}
            {/*        options={ports}*/}
            {/*        name="portOfLoading"*/}
            {/*        setValue={setValue}*/}
            {/*        errors={errors}*/}
            {/*        instruction="Please fill in the port of loading"*/}
            {/*        required*/}
            {/*    />*/}
            {/*    <CustomSelect*/}
            {/*        name="transshipments"*/}
            {/*        register={register}*/}
            {/*        label="Transshipment"*/}
            {/*        setValue={setValue}*/}
            {/*        errors={errors}*/}
            {/*        instruction="Please fill in the transshipments"*/}
            {/*        options={[]}*/}
            {/*    />*/}
            {/*    <CustomSelect*/}
            {/*        register={register}*/}
            {/*        label="Port of Discharge"*/}
            {/*        options={ports}*/}
            {/*        setValue={setValue}*/}
            {/*        name="portOfDischarge"*/}
            {/*        errors={errors}*/}
            {/*        instruction="Please fill in the port of discharge"*/}
            {/*        required*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div className="flex w-full mt-4">*/}
            {/*    <div className="w-1/2">*/}
            {/*        <Input label="Place of Delivery" value="" />*/}
            {/*    </div>*/}
            {/*    <div className="w-1/2 flex">*/}
            {/*        <div className="w-1/2">*/}
            {/*            <CustomDatePicker*/}
            {/*                onChange={date => {*/}
            {/*                    setDateOfLoading(date);*/}
            {/*                }}*/}
            {/*                setValue={setValue}*/}
            {/*                register={register}*/}
            {/*                errors={errors}*/}
            {/*                selected={dateOfLoading}*/}
            {/*                label="Date of Loading"*/}
            {/*                name="dateOfLoading"*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*        <div className="w-1/2">*/}
            {/*            <CustomDatePicker*/}
            {/*                onChange={date => {*/}
            {/*                    setDateOfLoss(date);*/}
            {/*                }}*/}
            {/*                setValue={setValue}*/}
            {/*                errors={errors}*/}
            {/*                selected={dateOfLoss}*/}
            {/*                register={register}*/}
            {/*                label="Date of Loss/Discharge"*/}
            {/*                name="dateOfLoss"*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="flex w-full mt-4">*/}
            {/*    <div className="w-1/2">*/}
            {/*        <Input*/}
            {/*            name="consignor"*/}
            {/*            label="Consignor/Shipper"*/}
            {/*            register={register}*/}
            {/*            instruction={errors.consignor && 'Please fill in the consignor'}*/}
            {/*            required*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className="w-1/2">*/}
            {/*        <Input*/}
            {/*            register={register}*/}
            {/*            name="consignee"*/}
            {/*            label="Consignee"*/}
            {/*            instruction={errors.consignee && 'Please fill in the consignee'}*/}
            {/*            required*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="w-full flex justify-center">*/}
            {/*    <div className="w-1/2 flex mt-4">*/}
            {/*        <div className="w-1/2">*/}
            {/*            <File*/}
            {/*                label="Bill of Loading (Front)"*/}
            {/*                name="billOfLadingFront"*/}
            {/*                onChange={e => onFileAdded(e, 'bill-of-lading-front')}*/}
            {/*                required*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*        <div className="w-1/2">*/}
            {/*            <File*/}
            {/*                label="Bill of Landing (Back)"*/}
            {/*                name="billOfLadingBack"*/}
            {/*                onChange={e => onFileAdded(e, 'bill-of-lading-back')}*/}
            {/*                required*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<LodgeFooterButton active={1} onNextEvent={handleSubmit(onSubmitEvent)} />*/}
        </form>
    );
};

// TransportationScreen.propTypes = {
//     onSubmitEvent: PropTypes.func,
//     match: PropTypes.object,
// };

// export default withRouter(ContactForm);
export default ContactForm;
