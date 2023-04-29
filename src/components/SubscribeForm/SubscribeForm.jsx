import  Button  from 'components/Button/Button';
import { ErrorMessage, Formik } from 'formik';
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
import {selectEmail} from 'redux/auth/selectors';

import * as yup from 'yup';

const schema = yup.object().shape({
  subscribe: yup.string().min(4).email().required(),
});

const SubscribeForm = () => {
  const { screenType } = useMedia();

  const userEmail = useSelector(selectEmail);

  const handleSubmit = async ( values, { resetForm }) => {
    const { subscribe } = values;
    if (userEmail !== subscribe) {
      return;
    }
    console.log(subscribe);
    await updateSubscribe();
    console.log(updateSubscribe);
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
                <InputIcon>
                </InputIcon>

                <SubInput
                  state={errors.subscribe ? 'error' : 'undefined'}
                  type="email"
                  name="subscribe"
                  placeholder="Enter your current email"
                />
                <ErrorMessage name="subscribe" />
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
                onClick={event=>{
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
