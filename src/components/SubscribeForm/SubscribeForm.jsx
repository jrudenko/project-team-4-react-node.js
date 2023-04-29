// import React from "react";
// import { Formik, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import styled from "styled-components";
// import {SubForm,TextFrame, SubTitle, SubText,FormFrame,InputBox,InputIcon, SubInput} from './SubscribeForm.styled'
// import Button from '../Button';
// import { useState, useEffect } from "react";

// const validationSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Email is required"),
// });

// const ErrorMsg = styled.div`
//   color: red;
//   font-size: 14px;
//   margin-top: 5px;
// `;

// const SubscribeForm = () => {
//   const [email, updateSubscribe] = useState("");
//   const [isDisabled, setIsDisabled] = useState(true);

//   useEffect(() => {
//       if (email.trim() !== "") {
//           setIsDisabled(false);
//       } else {
//           setIsDisabled(true);
//       }
//   }, [email]);

//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log(handleSubmit);

//   }

//   const onChange = (event) => {
//     updateSubscribe(event.target.value);
//   };

//   return (
//     <Formik
//       initialValues={{ email: "" }}
//       validationSchema={validationSchema}

//       // onSubmit={(values, { setSubmitting }) => {
//       //   setTimeout(() => {
//       //     alert(JSON.stringify(values, null, 2));
//       //     setSubmitting(false);
//       //   }, 400);
//       // }}
//     >
//         <SubForm onSubmit={handleSubmit}>
//           <TextFrame>
//           <SubTitle>Subscribe to our Newsletter</SubTitle>
//           <SubText> Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</SubText>
//           </TextFrame>

//         <FormFrame>
//           <InputBox>
//             <InputIcon />
//             <SubInput
//             value={email}
//             onChange={onChange}
//               type="email"
//               name="email"
//               placeholder="Enter your email address"
//             />
//           </InputBox>
//           <ErrorMessage name="email" component={ErrorMsg} />
//           <Button type="submit"
//                   look="subscribe"
//                   width="204px"
//                   heigth="38px"
//                   widthTablet="171px"
//                   heigthTablet="50px"
//                   widthDesktop="339px"
//                   heigthDesktop="60px"
//                   fontSize="14px"
//                   fontSizeTablet="16px"
//                   fontSizeDesktop="16px"
//                   lineHeight="16px"
//                   lineHeightTablet="18px"
//                   lineHeightDesktop="18px"
//                   disabled={isDisabled }
//            >
//             Submit
//           </Button>
//         </FormFrame>
//         </SubForm>

//     </Formik>
//   );
// };

// export default SubscribeForm;



import Button from 'components/Button/Button';
import { Formik } from 'formik';
import {
  SubInput,
  InputIcon,
  InputBox,
  SubForm,
  FormFrame,
  SubTitle,
  SubText,
  TextFrame,
} from './SubscribeForm.styled';

import { useMedia } from 'hooks';
import { updateSubscribe } from 'service/API/serviseApi';
import { useSelector } from 'react-redux';

import * as yup from 'yup';

const schema = yup.object().shape({
  subscribe: yup.string().min(4).email().required(),
});

const SubscribeForm = () => {
  const { screenType } = useMedia();

  const userEmail = useSelector(state => state.auth.user.email);

  const handleSubmit = async (values, { resetForm }) => {
    const { subscribe } = values;
    if (userEmail !== subscribe) {
      return;
    }
    await updateSubscribe();
    resetForm();
  };

  return (
    <SubForm>
      {screenType === 'desktop' ? (
        <TextFrame>
          <SubTitle>Subscribe to our Newsletter</SubTitle>
          <SubText>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </SubText>
        </TextFrame>
      ) : null}
      <Formik
        initialValues={{ subscribe: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit, resetForm }) => {
          return (
            <FormFrame>
              <InputBox>
                <InputIcon></InputIcon>

                <SubInput
                  state={errors.subscribe ? 'error' : 'undefined'}
                  type="email"
                  name="subscribe"
                  placeholder="Enter your current email"
                />
                {/* <FormError name="subscribe" /> */}
              </InputBox>
              <Button
                type="submit"
                look="subscribe"
                width="204px"
                heigth="38px"
                widthTablet="171px"
                heigthTablet="50px"
                widthDesktop="339px"
                heigthDesktop="60px"
                fontSize="14px"
                fontSizeTablet="16px"
                fontSizeDesktop="16px"
                lineHeight="16px"
                lineHeightTablet="18px"
                lineHeightDesktop="18px"
                onClick={event => {
                  handleSubmit(event);
                  resetForm();
                }}
              >
                Subcribe
              </Button>
            </FormFrame>
          );
        }}
      </Formik>
    </SubForm>
  );
};

export default SubscribeForm;
