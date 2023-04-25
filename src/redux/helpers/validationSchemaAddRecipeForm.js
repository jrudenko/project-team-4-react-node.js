import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  file: yup.string(),
  title: yup.string().required('Title is required'),
  about: yup.string().required('About recipe is required'),
  category: yup.string(),
  time: yup.string(),
  ingredients: yup.array().of(
    yup.object().shape({
      quantity: yup
        .number()
        .required('Enter quantity measure')
        .min(0, 'Quantity must be greater than or equal to 0'),
      measure: yup.string(),
      id: yup.string().required('Chose some ingredient'),
    })
  ),
  preparation: yup
    .array()
    .of(yup.string().required('Preparation step is required'))
    .min(1, 'At least one preparation step is required'),
});
