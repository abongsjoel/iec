import * as yup from 'yup';

export const ContactFormValidation = yup.object().shape({
    fullName: yup
        .string()
        .required(),
    emailAddress: yup
        .string()
        .matches('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')
        .required(),
    phoneNumber: yup
        .number()
        .required(),
    countryOfOrgin: yup
        .string()
        .required(),
    personalSummary: yup
        .string()
        .required(),

});
