import * as yup from 'yup';

export const ContactFormValidation = yup.object().shape({
    fullName: yup
        .string()
        .required(),
    emailAddress: yup
        .string()
        .required(),
    // voyageNumber: yup.string().required(),
    // imoNumber: yup
    //     .string()
    //     .matches('IMO [0-9]{7}')
    //     .required(),
    // // vesselName: yup.string().required(),
    // consignor: yup.string().required(),
    // consignee: yup.string().required(),
    // portOfLoading: yup.object().required(),
    // portOfDischarge: yup.object().required(),
});
