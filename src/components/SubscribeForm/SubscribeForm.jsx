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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  subscribe: yup.string().min(4).email().required(),
});
function showToast() {
  toast.info('You have successfully subscribed to the newsletter!');
}

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
                  showToast();
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
