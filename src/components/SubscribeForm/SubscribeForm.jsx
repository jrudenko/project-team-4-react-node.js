import React from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {ReactComponent as InputIcon} from '../../images/SVG/logo.svg'

import { SubForm, SubTitle, SubText, InfoFrame, FormFrame, SubInput, InputFrame, SubButton} from './SubscribeForm.styled';

export const SubscribeForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Відправка електронного листа
      await axios.post('/send-email', values);

      // Підписка на розсилку
      await axios.post(
        // {
        //   email_address: values.email,
        //   status: 'subscribed',
        // },
        // {
        //   auth: {
        //     username: 'apikey',
        //     password: '{your_api_key}',
        //   },
        // }
      );

      // Скидання форми та відображення повідомлення про підписку
      resetForm();
      alert('Thank you for subscribing!');
    } catch (error) {
      alert('Error subscribing. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Invalid email')
          .required('Email is required'),
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
        <SubForm>
          <InfoFrame>
            <SubTitle>Subscribe to our Newsletter </SubTitle>
            <SubText>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</SubText>
          </InfoFrame>
            <FormFrame>
              <SubInput>
                <InputFrame>
                   <InputIcon/>
                  <Field type="email" name="email" placeholder="Enter your email address" />
                </InputFrame>
                 {/* <ErrorMessage name="email" component="div" /> */}
              </SubInput>

            <SubButton type="submit" disabled={isSubmitting}>
            Subcribe
              </SubButton>
            </FormFrame>
          </SubForm>

        </Form>
      )}
    </Formik>
  );
};



