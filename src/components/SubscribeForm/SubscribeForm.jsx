// import React from 'react';
// import { Formik, Form, Field} from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import {ReactComponent as InputIcon} from '../../images/SVG/envelope.svg'

// import { SubForm, SubTitle, SubText, InfoFrame, FormFrame, SubInput,  SubButton} from './SubscribeForm.styled';

// export const SubscribeForm = () => {
//   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
//     try {
//       // Відправка електронного листа
//       await axios.post('/send-email', values);

//       // Підписка на розсилку
//       await axios.post(
//         // {
//         //   email_address: values.email,
//         //   status: 'subscribed',
//         // },
//         // {
//         //   auth: {
//         //     username: 'apikey',
//         //     password: '{your_api_key}',
//         //   },
//         // }
//       );

//       // Скидання форми та відображення повідомлення про підписку
//       resetForm();
//       alert('Thank you for subscribing!');
//     } catch (error) {
//       alert('Error subscribing. Please try again later.');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Formik
//       initialValues={{ email: '' }}
//       validationSchema={Yup.object().shape({
//         email: Yup.string()
//           .email('Invalid email')
//           .required('Email is required'),
//       })}
//       onSubmit={handleSubmit}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//         <SubForm>
//           <InfoFrame>
//             <SubTitle>Subscribe to our Newsletter </SubTitle>
//             <SubText>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</SubText>
//           </InfoFrame>
//             <FormFrame>
//               <SubInput>
//                  <InputIcon/>
//                 <Field type="email" name="email"
//                   placeholder="Enter your email address"
//                 ></Field>
//                  {/* <ErrorMessage name="email" component="div" /> */}
//               </SubInput>

//             <SubButton type="submit" disabled={isSubmitting}>
//             Subcribe
//               </SubButton>
//             </FormFrame>
//           </SubForm>

//         </Form>
//       )}
//     </Formik>
//   );
// };


import axios from "axios";
import { toast } from 'react-toastify';
import {
  FormFrame,
  TextFrame,
    SubButton,
    SubForm,
    InputIcon,
    SubInput,
    SubText,
  SubTitle,
    InputBox,
} from "./SubscribeForm.styled";
import { useState, useEffect } from "react";

export const SubscribeForm = () => {
    const [email, setEmail] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        if (email.trim() !== "") {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [email]);

const handleSubmit = (event) => {
  event.preventDefault();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (emailRegex.test(email)) {
    axios
      .patch("/user/subscription", { inputEmail: email })
      .then((response) => {
        toast.success("Email was successfully submitted!");
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again later!");
      });
  } else {
    toast.error("Please enter a valid email!");
  }
};
  const onChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <SubForm onSubmit={handleSubmit}>

        <TextFrame>
        <SubTitle>Subscribe to our Newsletter</SubTitle>
         <SubText>
          Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.
        </SubText>
        </TextFrame>

        <FormFrame>
          <InputBox>
          <InputIcon />
          <SubInput
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={onChange}
          />
        </InputBox>
        <SubButton type="submit" disabled={isDisabled}>
          Subscribe
          </SubButton>
        </FormFrame>

      </SubForm>
    </>
  );

};
